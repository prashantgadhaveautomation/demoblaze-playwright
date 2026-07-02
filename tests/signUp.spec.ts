import test, { expect } from "playwright/test";
import { signup } from "../pages/signUp";


//before each hook
test.beforeEach(async({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

});

test(" signup test casr for demoblaze",async({page})=> {

const signupobj= new signup(page)
await signupobj.dosignup ("prashant_123","password@123");}); 


test("Close button", async ({ page }) => {

    const signupobj = new signup(page);

    await signupobj.closeByButton();

    await signupobj.verifyModalClosed();
});

test("Cross button", async ({ page }) => {

    const signupobj = new signup(page);

    await signupobj.closeByCross();

    await signupobj.verifyModalClosed();
});




