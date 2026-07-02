import test, { expect } from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import data from "../utilities/testData.json";


//before each hook
test.beforeEach(async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

});

 
test ("login test case of demoblaze", async({page})=>  {

     for (let i of data.users)
     {
      
       const obj = new LoginPage(page);  
       await obj.doLogin(i.username,i.password);

       //validation
       expect(await page.locator('//a[@id="logout2"]')).toHaveText("Log out")

       await page.locator('//a[@id="logout2"]').click();
     }

 


});


test ( "close button", async({page})=> {

  const LoginPageobj = new LoginPage (page)

    await LoginPageobj.closeByButton();
    await LoginPageobj.verfiyModalclosed();

});


test ("Cross button",async({page})=>{

 const LoginPageobj = new LoginPage (page)
  await LoginPageobj.crossByButton();
  await LoginPageobj.verfiyModalclosed();

});