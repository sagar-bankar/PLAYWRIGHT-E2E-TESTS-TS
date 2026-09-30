import { test, expect, request } from "@playwright/test";
import { log } from "../helpers/logger";
import fileHelpers from "../helpers/file-helpers";

test.describe("REST API DEMO", () => {
  //env config
  let envConfig = undefined;
  test.beforeEach("Get the env config", async ({ request }, testInfo) => {
    envConfig = testInfo.project.use as any;
  });

  test("Should get list of users", async ({ request }) => {
    //const baseURL = "https://reqres.in/api/users?page=2"; //keep in config file and pass it as env variable

    //make a get call
    await log("info", `making a get call using ${envConfig}`);
    const res = await request.get(`${envConfig.apiURL}/users?page=2`);

    //assert the status
    expect(res.status()).toBe(200);

    //get list of users from the response
    const usersData = await res.json();

    await log("info", `List of users:${JSON.stringify(usersData)}`);
    await log("info", `Total number of users:${usersData.data.length}`);

    //write the list of users
    fileHelpers.writeFile(`${process.cwd()}/data/api-res/List-of-users.json`,`${JSON.stringify(usersData)}`);
  });
});
