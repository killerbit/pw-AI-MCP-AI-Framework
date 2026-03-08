# 🚀 Playwright MCP Server Automation

This project demonstrates how to use **Playwright Test Automation** integrated with an **MCP (Model Context Protocol) Server** for browser automation and testing.

The MCP server allows external tools, AI agents, or services to interact with the browser using Playwright APIs in a structured way.

---

# 📌 Tech Stack

Automation Framework: Playwright
Language: TypeScript / JavaScript
Protocol: MCP (Model Context Protocol)
Runtime: Node.js
Test Runner: Playwright Test Runner

---

# 📂 Project Structure

project
│
├── tests
│   ├── login.spec.ts
│   └── dashboard.spec.ts
│
├── pages
│   └── loginPage.ts
│
├── mcp-server
│   └── server.ts
│
├── utils
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md

---

# ⚙️ Installation

Clone the repository

git clone https://github.com/your-repo/playwright-mcp-server.git

Navigate to the project folder

cd playwright-mcp-server

Install dependencies

npm install

Install Playwright browsers

npx playwright install

---

# ▶️ Running Tests

Run all Playwright tests

npx playwright test

Run specific test

npx playwright test tests/login.spec.ts

Run tests in headed mode

npx playwright test --headed

---

# 🔌 Start MCP Server

Start the MCP server to allow external tools to control Playwright.

node mcp-server/server.js

The MCP server will expose endpoints that allow browser automation commands such as:

* Launch browser
* Open page
* Click elements
* Fill forms
* Capture screenshots

---

# 🧪 Example Playwright Test

import { test, expect } from '@playwright/test';

test('Verify homepage loads', async ({ page }) => {

await page.goto('https://example.com');

await expect(page).toHaveTitle(/Example/);

});

---

# 📡 Example MCP Server Code

const { chromium } = require('playwright');

async function startServer() {

const browser = await chromium.launch();

const page = await browser.newPage();

await page.goto('https://example.com');

console.log("Page opened successfully");

}

startServer();

---

# 🌍 Use Cases

MCP + Playwright can be used for:

* AI-driven browser automation
* Automated UI testing
* Web scraping
* End-to-end testing
* Integration with AI agents and automation tools

---

# ⭐ Best Practices

* Use Page Object Model for scalable tests
* Separate test data from test logic
* Implement reusable fixtures
* Generate test reports
* Integrate with CI/CD pipelines

---

# 🔄 CI/CD Integration

The framework can be integrated with CI/CD tools like:

* Jenkins
* GitHub Actions
* Azure DevOps

Example command used in pipelines

npm install
npx playwright install
npx playwright test

---

# 👨‍💻 Author

Siddhesh Khavanekar
Automation Test Engineer

Skills:

Playwright
Selenium
Java
API Testing
Test Automation Framework Design
