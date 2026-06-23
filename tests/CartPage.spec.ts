import test from "playwright/test";
import { cartPage } from "../pages/CartPage.ts";
import { LoginPage } from "../pages/LoginPage.ts";
import { ProductPage } from "../pages/ProductPage.ts";

test.beforeEach(async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

});


test ("Home test case of demoblaze", async({page})=>  {

    const loginpageobj = new LoginPage(page);
    await loginpageobj.doLogin("prashant_123","password@123");

    //const ProductPageobj = new ProductPage(page);
    //await ProductPageobj.ProductPage();


     const cartPageobj = new cartPage(page);
     await cartPageobj.openCart();
     await cartPageobj.verfiycartflow();
    
});
