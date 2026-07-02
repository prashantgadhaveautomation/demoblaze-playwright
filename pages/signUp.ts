import { Locator, Page } from "playwright";
import test, { expect } from "playwright/test";



export class signup {
     
     //signupLocator

     readonly page:Page;
     readonly signuplink:Locator;
     readonly userNameFiled:Locator;
     readonly passwordFiled:Locator;
     readonly signupbutton:Locator;
     //NEW
     readonly closebutton:Locator
     readonly closeIcon:Locator
     readonly signupmodal:Locator
    

    constructor (signuppage:Page)

     {
        
        this.page=signuppage;
        this.signuplink=signuppage.locator('//a[@id="signin2"]');
        this.userNameFiled=signuppage.locator('//input[@id="sign-username"]');
        this.passwordFiled=signuppage.locator('//input[@id="sign-password"]');
        this.signupbutton=signuppage.locator('//button[text()="Sign up"]');

        //close
        this.closebutton=signuppage.locator('//div[@id="signInModal"]//button[text()="Close"]');
        this.closeIcon=signuppage.locator('#signInModal button.close');
        this.signupmodal=signuppage.locator('//div[@id="signInModal"]');            //('#signInModal')
    }

        
 async dosignup(username: string, password: string){

  //click on signup 

  await this.signuplink.click();

  //enter username 
  await this.userNameFiled.fill(username);


  //enter password
  await this.passwordFiled.fill(password);


  //clcik on signup button for sucessfull sign in

  await this.signupbutton.click();


 console.log("successful signup");

}

 // ✅ close button
 
  async closeByButton() {

        await this.signuplink.click();
        await expect(this.closebutton).toBeVisible();
        await this.closebutton.click();
        console.log("successful closeButton ")
    }

//cross button
    async closeByCross(){

      await this.signuplink.click();
      await expect(this.closeIcon).toBeVisible();
      await this.closeIcon.click();
      console.log("successful closeByCross ")
     
 }
    
    // ✅ verify
    async verifyModalClosed() {

    await expect(this.signupmodal).toBeHidden();
       
    }
}



