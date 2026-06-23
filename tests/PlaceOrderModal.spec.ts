import test from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { PlaceOrderModal } from "../pages/PlaceOrderModal";
import { cartPage } from "../pages/CartPage";




test.beforeEach(async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

});



test ("Home test case of demoblaze", async({page})=>  {

    const loginpageobj = new LoginPage(page);
    await loginpageobj.doLogin("prashant_123","password@123");

     const cartPageobj = new cartPage(page);
     await cartPageobj.openCart();
     await cartPageobj.verfiycartflow();

     const PlaceOrderModalobj = new PlaceOrderModal(page);
     await PlaceOrderModalobj.formfill();
     await PlaceOrderModalobj.captureScreeshot();

});