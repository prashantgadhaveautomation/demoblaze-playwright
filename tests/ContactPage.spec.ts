import test, { expect } from "playwright/test";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";

test.beforeEach(async({page})=>{
await page.goto("https://www.demoblaze.com/index.html");

});

test ("Home test case of demoblaze", async({page})=>  {

    const loginpageobj = new LoginPage(page);
    await loginpageobj.doLogin("prashant_123","password@123");
    const ContactPageobj = new ContactPage(page);
    await ContactPageobj.openContactForm();



});
