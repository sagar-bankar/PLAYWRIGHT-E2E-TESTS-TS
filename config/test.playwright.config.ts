import { baseConfig } from "../playwright.config";
import { defineConfig, devices } from "@playwright/test";
import { EnvConfig } from "../tests/helpers/config-fixtures";
import path from "path";
console.log(`--RUNNING test in TEST ENVIRONMENT--`);

export default defineConfig<EnvConfig>({
  ...baseConfig, //loads all existing config values
  testDir: path.resolve(process.cwd(), "./tests"),
  use: {
    ...baseConfig.use, //Loading the existing use object
    envName: "test",
    appURL: "https://katalon-demo-cura.herokuapp.com/",
    orangehrmappURL: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    apiURL: "https://reqres.in/api",

    dbConfig: { server: "", dbName: "", connectionstr: "" },
  },
});
