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

    if (fs.existsSync(resultsDir)) {
      fs.rmSync(resultsDir, { recursive: true, force: true });
    }
  }
  console.log(`[INFO]:completed Local runs...`);

  //All other one-off task go here...
}
