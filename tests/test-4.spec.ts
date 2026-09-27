import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  //assert url
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
});
