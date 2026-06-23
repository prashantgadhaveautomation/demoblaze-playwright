import { Page, Locator, expect } from '@playwright/test';
import { cartPage } from './CartPage';

export class PlaceOrderModal {

    readonly page:Page;
    readonly Name:Locator;
    readonly Country:Locator;
    readonly City:Locator;
    readonly Creditcard:Locator;
    readonly Month:Locator;
    readonly year:Locator;
    readonly purchase:Locator;
    readonly successmsg:Locator
    readonly okbutton:Locator

    constructor (CheckoutModal :Page)
    {

     this.page=CheckoutModal ;
     this.Name=CheckoutModal .locator('//input[@id="name"]');
     this.Country=CheckoutModal .locator('//input[@id="country"]');
     this.City=CheckoutModal .locator('//input[@id="city"]');
     this.Creditcard=CheckoutModal .locator('//input[@id="card"]');
     this.Month=CheckoutModal .locator('//input[@id="month"]');
     this.year=CheckoutModal .locator('//input[@id="year"]');
     this.purchase=CheckoutModal .locator('//button[text()="Purchase"]');
     this.successmsg=CheckoutModal.locator('.sweet-alert');
     this.okbutton=CheckoutModal.locator('//button[text()="OK"]');
     
    }

    async formfill() {

        //fill name

        await this.Name.fill('prashant');

        //fill country

        await this.Country.fill('india');

        //fill city

        await this.City.fill('indore');

        //fill creditcard

        await this.Creditcard.fill('123456789');

        //fill month

        await this.Month.fill('march');

        //fill year

        await this.year.fill('2026');

        //click on purchase button

        await this.purchase.click();

        console.log("✅ Form filled");

        //successmsg display

        const text = await this.successmsg.innerText();

        console.log("message:" ,text );

        //clciked on ok button

        await this.okbutton.click();

}
    async captureScreeshot() {

             // wait for popup text
             await this.page.locator('text=Thank you for your purchase!').waitFor();


            // ✅ Full page screenshot
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

             
            await this.page.screenshot({path: `test-results/order-${timestamp}.png`});


             console.log ("✅screenshot saved");

    }


}











