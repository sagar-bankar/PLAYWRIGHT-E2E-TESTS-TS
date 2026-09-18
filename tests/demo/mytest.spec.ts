import { test, expect } from "@playwright/test";

test("should load homepage with correct title", async ({ page }) => {
  // 1.Goto the homepage
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  // 2.Assert if the title is the correct
  await expect(page).toHaveTitle("CURA Healthcare Service");
  // 3.assert header Text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test.only("should demo config", async ({ page }, tesInfo) => {
  // 1.Goto the homepage
  console.log(`>>config at run time ${tesInfo.config}`);
  //await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test.only("should demo fixtures", async ({ page, browserName,request }, tesInfo) => {
  console.log(`>>test run on ${browserName}`);
});
