import { test, expect } from "@playwright/test";

test.describe("Multiple Windows Flow", () => {
  test("should handle parent and child windows", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    await page.getByRole("link", { name: "Multiple Windows" }).click();
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/windows");
    await expect(page.locator("h3")).toHaveText("Opening a new window");

    const [newWindow] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Click Here" }).click(),
    ]);

    await newWindow.waitForLoadState("domcontentloaded");
    await newWindow.bringToFront();
    await expect(newWindow.locator("h3")).toHaveText("New Window");

    const [nextWindow] = await Promise.all([
      newWindow.waitForEvent("popup"),
      newWindow.evaluate(() => window.open("https://the-internet.herokuapp.com/windows/new", "_blank")),
    ]);

    await nextWindow.waitForLoadState("domcontentloaded");
    await nextWindow.bringToFront();
    await expect(nextWindow.locator("h3")).toHaveText("New Window");

    await page.bringToFront();
    await expect(page.locator("h3")).toHaveText("Opening a new window");
  });
});
