import { test, type Page, type Locator } from "@playwright/test";

//full page screenshot

async function takeFullPageScreenshot(page: Page, screenshotName: string) {
  const screenshot = await page.screenshot({ fullPage: true });

  //attach it to report
  await test.info().attach(screenshotName, {
    body: screenshot,
    contentType: "image/png",
  });
}

export default (takeFullPageScreenshot)
