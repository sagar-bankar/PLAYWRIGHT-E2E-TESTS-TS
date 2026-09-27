import { baseConfig } from "../playwright.config";
import { defineConfig, devices } from "@playwright/test";
import { EnvConfig } from "../tests/helpers/config-fixtures";
import path from "path";

console.log(`--RUNNING test in DEV ENVIRONMENT--`);

export default defineConfig<EnvConfig>({
  ...baseConfig, //loads all existing config values
  testDir: path.resolve(process.cwd(), "./tests"),
  use: {
    ...baseConfig.use, //Loading the existing use object
    envName: "dev",
    appURL: "https://www.google.com",
    dbConfig: { server: "", dbName: "", connectionstr: "" },
  },
});
