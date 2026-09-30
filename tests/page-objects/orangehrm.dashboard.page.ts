import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page";
import { log } from "../helpers/logger";

export default class DashBoardPage extends BasePage {
  //constructor
  constructor(page: Page) {
    super(page);
  }

  //elements
  get dashboard() {
    return this.page.getByRole("link", { name: "Dashboard" });
  }

  async isDashboardVisible() {
    await expect(this.dashboard).toBeVisible({ timeout: 1500 }); //1.5 seconds will wait
    const status = await this.dashboard.isVisible();
    await log("info", `dashboard status is:${status}`);
  }
}
