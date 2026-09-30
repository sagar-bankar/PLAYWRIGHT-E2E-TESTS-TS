import { test, expect } from "@playwright/test";
import HomePage from "../page-objects/orangehrm.home.page";
import DashBoardPage from "../page-objects/orangehrm.dashboard.page";

// test("Login to the OrangeHRM Web", async ({ page }, testInfo) => {
//   //envConfig
//   const envConfig = testInfo.project.use as any;
//   //create object of HomePage
//   const homepage = new HomePage(page);
//   await homepage.loginOrangehrmApp(
//    process.env.ORANGEHRMURL,
//     process.env.ORANGEHRM_TEST_USERNAME,
//     process.env.ORANGEHRM_TEST_PASSWORD,
//   );
// });

test("verify is dashboard visible", async ({ page }, testInfo) => {
  //envConfig
  const envConfig = testInfo.project.use as any;
  //create object of HomePage
  const homepage = new HomePage(page);
  await homepage.loginOrangehrmApp(
    envConfig.orangehrmappURL,
    process.env.ORANGEHRM_TEST_USERNAME,
    process.env.ORANGEHRM_TEST_PASSWORD,
  );

  //create objet of dashboard page
  const dashboard = new DashBoardPage(page);

   await dashboard.isDashboardVisible();

  
});
