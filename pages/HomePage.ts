import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly phones: Locator;
    readonly laptops: Locator;
    readonly monitors: Locator;

    readonly productCards: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productDesc: Locator;

    constructor(pageRecivedFromLoginTest: Page) {

        this.page = pageRecivedFromLoginTest;

        this.phones = pageRecivedFromLoginTest.locator('//a[text()="Phones"]');
        this.laptops = pageRecivedFromLoginTest.locator('//a[text()="Laptops"]');
        this.monitors = pageRecivedFromLoginTest.locator('//a[text()="Monitors"]');

        this.productCards = pageRecivedFromLoginTest.locator('#tbodyid .card');
        this.productName = pageRecivedFromLoginTest.locator('.card-title');
        this.productPrice = pageRecivedFromLoginTest.locator('.card-block h5');
        this.productDesc = pageRecivedFromLoginTest.locator('.card-text');
    }

    // ✅ Category click
    async clickCategory(category: string) {                   //string=mobile,laptop,monitor

       console.log(`Clicking Category: ${category}`);         //Clicking category:mobile

        if (category === "mobile") {await this.phones.click();}
      
        else if (category === "laptop") {await this.laptops.click();}
        
       else if (category === "monitor") {await this.monitors.click();}
         

       
        await this.page.waitForTimeout(2000);

        console.log("First Product:",await this.productName.first().innerText());   //first product
    }

    // ✅ Main method 
         async verifyProducts(category: string) {

        console.log(`\n===== ${category.toUpperCase()} =====`);   //========MOBILE=======,==========LAPTOP========,=====MONITOR===

        const count = await this.productCards.count();             //Total Product count
        console.log("Total Products:", count);                     

        let seen = new Set();
        let duplicateFound = false;

        for (let i = 0; i < count; i++) {

            const name = await this.productName.nth(i).innerText();
            const price = await this.productPrice.nth(i).innerText();
            const desc = await this.productDesc.nth(i).innerText();

            console.log(`${name} | ${price} `);    //name,price,description of product

            // ✅ Duplicate check (same mobile or same product)
            const key = name + price;

            if (seen.has(key)) {
                console.log("❌ Duplicate Found:", name);
                duplicateFound = true;
            } else {
                seen.add(key);

}
        }

        if (!duplicateFound) {
            console.log("✅ No duplicate product");
        }
    }
}
``
