Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭


# Instructions and Notes

## In this session...

1. ✅ Install playwright
   - `npm init playwright@latest`

2. Check if installed correctly
   - `npx playwright --help`

## Key callouts

- [Q1] Will I get these commands in the course?
  - [Ans] Yes, will attach them in `Resources`

- [Q] What if the commands shown in the file changed?
  - [Ans] ALWAYS check and refer for `resources`



# Instructions and Notes

## In this session...

Let's create the following folder structure:

```sh
PLAYWRIGHT-E2E-TESTS/
├── .github/                 # CI config folder
├── .vscode/                 # Editor-specific settings
│   └── mcp.json             # MCP server config for VS Code
├── config/                  # Environment-specific config files
├── data/                    # Static data and constants
│   └── constants.json       # Common constants used in tests
├── debug/                   # Optional: Debug-related outputs/logs
├── logs/                    # Application/test logs
├── node_modules/            # Auto-generated dependencies
├── playwright-report/       # Playwright HTML test report output
├── resources/               # Misc test resources (e.g. images, files)
├── tests/                   # All organized test files
│   ├── api/                 # API test specs
│   ├── demo/                # Demo-related test specs
│   ├── devices/             # Device related scenarios
│   ├── e2e/                 # End-to-end test specs
│   ├── functional/          # Functional test cases
│   ├── helpers/             # Utility functions for tests
│   └── page-objects/        # Page Object Model files
├── tests-examples/          # Auto-generated sample test scenarios
├── .env.example             # Template for environment files
├── .env                     # Template for environment files
├── .gitignore               # Git ignored files and folders
├── package-lock.json        # Dependency lock file
├── package.json             # Project metadata and scripts
├── playwright.config.ts     # Playwright configuration file
└── README.md                # Project overview and instructions
```


**Recommended VS Code Extensions**

- vscode-icons
- Prettier - Code formatter
- Path Intellisense
- npm Intellisense
- DotENV
- JavaScript (ES6) code snippets
- .gitignore Generator

---
