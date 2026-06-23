import { Page, Locator, expect } from '@playwright/test';

export class cartPage {
    checkCartEmpty() {
        throw new Error("Method not implemented.");
    }

    readonly page:Page;
    readonly cartlink:Locator;
    readonly productname:Locator
    readonly verifyTotalAmount:Locator;
    readonly placeorderbutton:Locator; 


    constructor (PageFromProduct:Page)
 
    {
 
        this.page=PageFromProduct;
        this.cartlink=PageFromProduct.locator('//a[text()="Cart"]');
        this.productname=PageFromProduct.locator ('//td[text()="Samsung galaxy s6"]');
        this.verifyTotalAmount=PageFromProduct.locator('//h3[@id="totalp"]');
        this.placeorderbutton=PageFromProduct.locator('//button[text()="Place Order"]');
    }

      async openCart(){
        //click on cart
        await this.cartlink.click();
     
      

    }
    
      async verfiycartflow() {

        await this.page.waitForTimeout(5000);

        //await this.page.waitForSelector('#tbodyid')

        const count = await this.page.locator('#tbodyid tr').count();

        console.log("Row Count:", count);
        

        if (count === 0) {
            console.log("❌ Cart empty ");
        } else {
            console.log("✅ Cart product ");
        
    
        //product name print
      
        const productText = await this.productname.first().innerText();

        console.log("✅ Product Name:", productText);


        //total price
        
            const totalamount=await this.verifyTotalAmount.innerText();
            console.log("💰verifyTotalAmount: "  ,totalamount);
        
        //clcik place order
        await this.placeorderbutton.waitFor();
        await this.placeorderbutton.click();

        }
    
    }

    



}
 