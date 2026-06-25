import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {

readonly page: Page;
readonly contactlink:Locator
readonly ContactEmail:Locator;
readonly ContactName:Locator;
readonly Message:Locator;
readonly Sendmessage:Locator



constructor(pageReceivedFromContactTest:Page) {

 this.page=pageReceivedFromContactTest;
 this.contactlink=pageReceivedFromContactTest.getByRole('link', { name: 'Contact' });
 this.ContactEmail=pageReceivedFromContactTest.locator('//input[@id="recipient-email"]');
 this.ContactName=pageReceivedFromContactTest.locator('//input[@id="recipient-name"]');
 this.Message=pageReceivedFromContactTest.locator('//textarea[@id="message-text"]');
 this.Sendmessage=pageReceivedFromContactTest.locator('//button[text()="Send message"]');

}

async openContactForm (){

    //click on urllink
    await this.contactlink.click();
    
    //enter email id
    await this.ContactEmail.fill('ramesh124@gmail.com');

    //contact name
    await this.ContactName.fill('ramesh panchal');

    //message
    await this.Message.fill('Paramount Skydance (NASDAQ: PSKY) is buying ');

    //sendbutton
    await this.Sendmessage.click();

    //print message
     console.log("✅ Message sent successfully");
   
}
}