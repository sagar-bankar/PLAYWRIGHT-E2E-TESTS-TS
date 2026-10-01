import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to the Login", async ({ page }) => {
    //1.Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/", {
      timeout: 30_000,
    }); //config level timeout

    //2.click on appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("Successfull login", async ({ page }, testInfo) => {
    //3.fill username and password
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    //custom screenshot
    let fullPageSscreenshot = await page.screenshot({ fullPage: true });
    testInfo.attach("Successfull login", {
      body: fullPageSscreenshot,
      contentType: "image/png",
    });

    //4.click on login
    //await page.getByRole("button", { name: "Login" }).click({timeout:10_000});
    await page.getByRole("button", { name: "Login" }).click();

    //5.assert the "Make Appointment"
    await expect(page.locator("h2")).toContainText("Make Appointment");
    //await expect(page.locator("h2")).toContainText("Make Appointment",{timeout:10_000});
  });

  test("Unsuccessfull login", async ({ page }) => {
    //3.fill username and password
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("This");

    //4.click on login
    await page.getByRole("button", { name: "Login" }).click();

    //5.assert the login failed message
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
