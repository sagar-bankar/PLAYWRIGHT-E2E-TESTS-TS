import { expect, type Page } from "@playwright/test";
import BasePage from "./base.page";
import { log } from "../helpers/logger";

export default class HomePage extends BasePage {
  //constructor
  constructor(page: Page) {
    super(page);
  }

  //elements

  get userNameInputBox() {
    return this.page.getByRole("textbox", { name: "Username" });
  }
  get passwordInputBox() {
    return this.page.getByRole("textbox", { name: "Password" });
  }
  get loginBtn() {
    return this.page.getByRole("button", { name: "Login" });
  }

  //actions methods
  async loginOrangehrmApp(url: string, username: string, password: string) {
    //logger
    await log("info", `Login to ${url}`);

    //login
    await this.navigateTo(url);
    await this.typeInto(this.userNameInputBox, username);
    await this.typeInto(this.passwordInputBox, password);
    await this.click(this.loginBtn);

    //assert the url
    await expect(this.page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    );

    //logger
    await log("info", `Home page is Successfully Launched... `);
  }
}
