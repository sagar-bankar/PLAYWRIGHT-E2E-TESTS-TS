import { test, expect } from "@playwright/test";

test.describe("make appointment", () => {
  test.beforeEach("login with valid cred", async ({ page }) => {
    //1.Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    //pause here for debuging
    await page.pause();

    //2.click on appointment
    page.getByRole("link", { name: "Make Appointment" }).click();

    //3.fill username and password
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    //4.click on login
    await page.getByRole("button", { name: "Login" }).click();

    //5.assert the "Make Appointment"
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  //tests go here
  test("test should make an appointment with non default values", async ({
    page,
  }) => {
    //1.dropdown
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    //2.check box
    await page
      .getByRole("checkbox", { name: "Apply for hospital readmission" })
      .check();
    //3.Radio Button
    await page.getByText("Medicaid").click();
    await page.locator("span").click();
    //4.select date
    await page.getByRole("cell", { name: "16" }).click();
    await page.getByRole("textbox", { name: "Comment" }).click();
    //5.comment
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill("todays appointment");
    //6.click on Book appointment
    await page.getByRole("button", { name: "Book Appointment" }).click();
    //assert
    await expect(
      page.getByRole("heading", { name: "Appointment Confirmation" }),
    ).toBeVisible();
  });

  //add more test here
});
