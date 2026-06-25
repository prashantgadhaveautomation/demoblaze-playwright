import test, { expect } from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";


test.beforeEach(async({page})=>{
await page.goto("https://www.demoblaze.com/index.html");

});

test ("Home test case of demoblaze", async({page})=>  {

    const loginpageobj = new LoginPage(page);
    await loginpageobj.doLogin("prashant_123","password@123");

})


test("Home category product validation", async ({ page }) => {

    const homeObj = new HomePage(page);

    // ✅ MOBILE
    await homeObj.clickCategory("mobile");
    await homeObj.verifyProducts("mobile");

    // ✅ LAPTOP
    await homeObj.clickCategory("laptop");
    await homeObj.verifyProducts("laptop");

    // ✅ MONITOR
    await homeObj.clickCategory("monitor");
    await homeObj.verifyProducts("monitor");



});

