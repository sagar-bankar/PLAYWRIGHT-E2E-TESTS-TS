import { test, expect } from "@playwright/test";
import HomePage from "../page-objects/orangehrm.home.page";

test("Login to the OrangeHRM Web", async ({ page }, testInfo) => {
  //envConfig
  const envConfig = testInfo.project.use as any;
  //create object of HomePage
  const homepage = new HomePage(page);
  await homepage.loginOrangehrmApp(
   process.env.ORANGEHRMURL,
    process.env.ORANGEHRM_TEST_USERNAME,
    process.env.ORANGEHRM_TEST_PASSWORD,
  );
});
