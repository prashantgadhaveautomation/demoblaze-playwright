import test from "playwright/test";
import { ProductPage } from "../pages/ProductPage.ts";
import { LoginPage } from "../pages/LoginPage.ts";
 


test.beforeEach(async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

});

 
 
test ("Home test case of demoblaze", async({page})=>  {
 
 
    //we need to handle dialoge/alert box
     page.on('dialog', async dothis => {
        console.log("Popup Come");
        console.log("Message:", dothis.message());
       
        await dothis.accept();
    });
 
   
     
    const loginpageobj = new LoginPage(page);
    await loginpageobj.doLogin("prashant_123","password@123");
 
    const ProductPageobj = new ProductPage(page);
    await ProductPageobj.ProductPage();
 
 
});
 
 
//Product link
//await page.locator ('//a [text() ="Samsung galaxy s6"]').click();
 
 
//add to cart
//await page.locator('//a [text() ="Add to cart"]').click();