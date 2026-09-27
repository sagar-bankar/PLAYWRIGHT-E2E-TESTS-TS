import { expect, Expect, type Locator, type Page } from "@playwright/test";
import { log } from "../helpers/logger";

export default class BasePage {
  readonly page: Page;
  //constructor
  constructor(page: Page) {
    this.page = page;
  }

  //All Reusable actions

  async navigateTo(path: string) {
    await log("info", `Navigating to the path :${path}`);
    await this.page.goto(path);
  }

  //click actions

  async click(ele: Locator) {
    try {
      await expect(ele).toBeVisible({ timeout: 10_000 }); //custom timeout:Default -5 seconds
      await ele.click();
    } catch (error) {
      await log(
        "error",
        `Failed to click element:${ele.toString()},original error:${error}`,
      );
      throw error;
    }
  }

  //type into
  async typeInto(ele: Locator, text: string) {
    try {
      await expect(ele).toBeVisible({ timeout: 10_000 });
      await ele.fill(text);
    } catch (error) {
      await log(
        "error",
        `Failed ti type into element:${error},original error:${error}`,
      );

      throw error;
    }
  }
}
