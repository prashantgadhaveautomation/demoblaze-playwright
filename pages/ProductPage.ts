import { Page, Locator } from '@playwright/test';
 
export class ProductPage {
 
    readonly page:Page;
    readonly galaxyS6:Locator;
    readonly addtocartbutton:Locator;
   
 
 
constructor (PageFromLoginTest:Page)
 
    {
 
        this.page=PageFromLoginTest;
        this.galaxyS6=PageFromLoginTest.locator('//a[text()="Samsung galaxy s6"]');
        this.addtocartbutton=PageFromLoginTest.locator('//a[text()="Add to cart"]');
        
    }
 
     async ProductPage(){
 
    //Product link  
     await this.galaxyS6.click();
 
     //add to cart
     await this.addtocartbutton.click();
     console.log("Add to cart clicked");
     await this.page.waitForTimeout(5000);

     
     
    }
 
 
}
 
 
 
 
//Product link
//await page.locator ('//a [text() ="Samsung galaxy s6"]').click();
 
 
//add to cart
//await page.locator('//a [text() ="Add to cart"]').click();