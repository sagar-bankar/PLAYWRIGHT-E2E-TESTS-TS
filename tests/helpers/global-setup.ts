import { type FullConfig } from "@playwright/test";
import path from "path";
import fs from "fs";

export default async function globalSetup(config: FullConfig) {
  console.log(`[INFO]:Starting Local runs...`);
  if (process.env.RUNNER?.toUpperCase() === "LOCAL") {
    console.log(`[INFO]:Detecting Local runs...`);
    //delete allure Results
    const resultsDir = path.resolve(process.cwd(), "allure-results");
    console.log(`>>resultsDir:${resultsDir}`);

    // if (fs.existsSync(resultsDir)) {
    //   fs.rmSync(resultsDir, { recursive: true, force: true });
    // }
    if (fs.existsSync(resultsDir)) {
      try {
        fs.rmSync(resultsDir, {
          recursive: true,
          force: true,
        });
      } catch (e) {
        console.log(
          "[WARN] allure-results folder is locked. Skipping cleanup.",
        );
      }
    }
  }
  console.log(`[INFO]:completed Local runs...`);

  //All other one-off task go here...

  //Set the loging Cookie Global Variable
  process.env.LOGIN_COOKIE = undefined;
}
