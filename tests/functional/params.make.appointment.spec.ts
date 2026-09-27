import { test, expect } from "@playwright/test";
import TestData from "../../data/test-data.js";

const makeAppTestData = TestData.makeAppointmentTestData(); //Return 3 Objects of data

//Access the data
for (const appData of makeAppTestData) {
  test.describe("make appointment", () => {
    test.beforeEach("login with valid cred", async ({ page }) => {
      //1.Launch URL
      await page.goto("https://katalon-demo-cura.herokuapp.com/");

      //2.click on appointment
      page.getByRole("link", { name: "Make Appointment" }).click();

      //3.fill username and password
      await page.getByLabel("Username").fill("John Doe");
      await page.getByLabel("Password").fill("ThisIsNotAPassword");

      //4.click on login
      await page.getByRole("button", { name: "Login" }).click();

      //get the login cookie
      const loginCookie = await page.context().cookies;
      process.env.LOGIN_COOKIE = JSON.stringify(loginCookie);

      //5.assert the "Make Appointment"
      await expect(page.locator("h2")).toContainText("Make Appointment");
    });

    //tests go here
    test(`${appData.testId}: test should make an appointment with non default values`, async ({
      page,
    }) => {
      //get the login cookies
      console.log(`>> login cookies: ${process.env.LOGIN_COOKIE}`);
      //1.dropdown
      await page.getByLabel("Facility").selectOption(appData.facility);
      //2.check box
      await page
        .getByRole("checkbox", { name: "Apply for hospital readmission" })
        .check();
      //3.Radio Button
      await page.getByText(appData.hcp).click();
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
}
