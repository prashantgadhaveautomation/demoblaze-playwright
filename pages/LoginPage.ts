//SIGIN //login //signup //resetpassword
import { Locator, Page } from "playwright";
import test, { expect } from "playwright/test";
 
export class LoginPage
{
     //loginLocator
     readonly page:Page;
     readonly loginlink:Locator;
     readonly userNameFiled:Locator;
     readonly passwordFiled:Locator;
     readonly loginbutton:Locator;
     readonly welcomemessage:Locator

     //close button
     readonly closebutton:Locator
     readonly closeicon:Locator
     readonly loginmodal:Locator
 
   
constructor(pageRecivedFromLoginTest:Page)  
     {
 
      this.page=pageRecivedFromLoginTest;
      this.loginlink=pageRecivedFromLoginTest.locator('//a[@id="login2"]');
      this.userNameFiled=pageRecivedFromLoginTest.locator('//input[@id="loginusername"]');
      this.passwordFiled=pageRecivedFromLoginTest.locator('//input[@id="loginpassword"]');
      this.loginbutton=pageRecivedFromLoginTest.locator('//button[text()="Log in"]');
      this.welcomemessage=pageRecivedFromLoginTest.locator('//a[@id="nameofuser"]');

      //close
      this.closebutton=pageRecivedFromLoginTest.locator('//div[@id="logInModal"]//button[text()="Close"]');
      this.closeicon=pageRecivedFromLoginTest.locator('#logInModal button.close');
      this.loginmodal=pageRecivedFromLoginTest.locator('//div[@id="logInModal"]');

 
     
    }
 
    async doLogin(username: string, password: string)
     {
 
    //click on login button
 
    await this.loginlink.click();
 
    //enter username
 
    await this.userNameFiled.fill(username);
 
    //enter password
 
    await this.passwordFiled.fill(password);
 
    //clcik on login button for sucessfull log in
    await this.loginbutton.click();

    // ✅ IMPORTANT → wait for welcome message
    await this.welcomemessage.waitFor();

     
   // assertion
   await expect(this.page.locator('#nameofuser')).toContainText('Welcome prashant_123');

  //const Welcome = await this.welcomemessage.innerText();

  //console.log("✅ Product Name:", Welcome);
     
}

 // ✅ close button
 async closeByButton(){

     await this.loginlink.click();
     
     await expect (this.closebutton).toBeVisible();

     await this.closebutton.click();

     console.log("successful closeButton ")
}

//cross button
async crossByButton(){

     await this.loginlink.click();

     await expect(this.closeicon).toBeVisible();

     await this.closeicon.click();

     console.log("successful crossByButton ")
}

// ✅ verify
async verfiyModalclosed(){

await expect(this.loginmodal).toBeHidden();

}
}
   
 
 
 
 
 