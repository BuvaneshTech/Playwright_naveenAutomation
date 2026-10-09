import {test,expect} from "@playwright/test"


test('first test method for playwright', async({page})=>{

await page.goto("https://www.amazon.com");
let pageTitle:string = await page.title();
console.log(pageTitle);


})


