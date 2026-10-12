# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo\Dedug.pause.make.appointment.spec.ts >> make appointment >> test should make an appointment with non default values
- Location: tests\demo\Dedug.pause.make.appointment.spec.ts:25:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Username')
    - waiting for "https://katalon-demo-cura.herokuapp.com/profile.php" navigation to finish...
    - navigated to "https://katalon-demo-cura.herokuapp.com/profile.php#login"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("make appointment", () => {
  4  |   test.beforeEach("login with valid cred", async ({ page }) => {
  5  |     //1.Launch URL
  6  |     await page.goto("https://katalon-demo-cura.herokuapp.com/");
  7  |     //pause here for debuging
  8  |     await page.pause();
  9  | 
  10 |     //2.click on appointment
  11 |     page.getByRole("link", { name: "Make Appointment" }).click();
  12 | 
  13 |     //3.fill username and password
> 14 |     await page.getByLabel("Username").fill("John Doe");
     |                                       ^ Error: locator.fill: Target page, context or browser has been closed
  15 |     await page.getByLabel("Password").fill("ThisIsNotAPassword");
  16 | 
  17 |     //4.click on login
  18 |     await page.getByRole("button", { name: "Login" }).click();
  19 | 
  20 |     //5.assert the "Make Appointment"
  21 |     await expect(page.locator("h2")).toContainText("Make Appointment");
  22 |   });
  23 | 
  24 |   //tests go here
  25 |   test("test should make an appointment with non default values", async ({
  26 |     page,
  27 |   }) => {
  28 |     //1.dropdown
  29 |     await page
  30 |       .getByLabel("Facility")
  31 |       .selectOption("Hongkong CURA Healthcare Center");
  32 |     //2.check box
  33 |     await page
  34 |       .getByRole("checkbox", { name: "Apply for hospital readmission" })
  35 |       .check();
  36 |     //3.Radio Button
  37 |     await page.getByText("Medicaid").click();
  38 |     await page.locator("span").click();
  39 |     //4.select date
  40 |     await page.getByRole("cell", { name: "16" }).click();
  41 |     await page.getByRole("textbox", { name: "Comment" }).click();
  42 |     //5.comment
  43 |     await page
  44 |       .getByRole("textbox", { name: "Comment" })
  45 |       .fill("todays appointment");
  46 |     //6.click on Book appointment
  47 |     await page.getByRole("button", { name: "Book Appointment" }).click();
  48 |     //assert
  49 |     await expect(
  50 |       page.getByRole("heading", { name: "Appointment Confirmation" }),
  51 |     ).toBeVisible();
  52 |   });
  53 | 
  54 |   //add more test here
  55 | });
  56 | 
```