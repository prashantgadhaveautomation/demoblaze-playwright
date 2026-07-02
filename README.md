# 🛒 DemoBlaze Playwright Automation Framework

## 📌 Project Overview
This project demonstrates end-to-end test automation of the DemoBlaze application using Playwright with TypeScript and Page Object Model (POM).

It covers UI automation, reusable framework design, and scalable test structure.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git & GitHub

---

## 🏗️ Framework Design

This framework is designed using the following principles:

✅ Page Object Model (POM)  
✅ Reusable Components  
✅ Base Page for common actions  
✅ Modular Test Structure  
✅ Clean and maintainable code  

---

## 📂 Project Structure

FRAMEWORK/
│
├── pages/                → Page classes (Login, Product, Cart etc)
├── tests/                → Test cases
├── utilities/            → Test data & helper functions
├── test-results/         → Screenshots
├── playwright-report/    → HTML test reports
├── playwright.config.ts
├── package.json

## 📄 Pages Implemented

- ✅ LoginPage
- ✅ ProductPage
- ✅ CartPage
- ✅ PlaceOrderModal
- ✅ signUp
- ✅ contactpage
- ✅ HomePage

---

## ✅ Test Scenarios Covered

- ✅ Login functionality (valid & invalid)
- ✅ Add product to cart
- ✅ Verify cart items
- ✅ Place order flow
- ✅ Screenshot capture with date & time

---

## 📸 Screenshots

Screenshots are automatically captured and stored in:

test-results/ File format:TestName-Date-Time.png



**Versions**

Node.js : v24.16.0  
Playwright : v1.61.0  
VS Code : v1.125.1  


## 👨‍💻 Author

**Prashant Gadhave**  
Senior QA Engineer  

---

## 📌 Notes

- Always follow Page Object Model (POM)
- Keep locators inside page classes
- Maintain reusable methods using BasePage
- Use proper assertions in tests
