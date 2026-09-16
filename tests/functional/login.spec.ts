import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to the Login", async ({ page }) => {
    //1.Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    //2.click on appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("Successfull login", async ({ page }) => {
    //3.fill username and password
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    //4.click on login
    await page.getByRole("button", { name: "Login" }).click();

    //5.assert the "Make Appointment"
    await expect(page.locator("h2")).toContainText("Make Appointment");
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
