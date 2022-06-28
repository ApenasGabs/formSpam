import puppeteer from'puppeteer';
import 'dotenv/config'
const {PAGE, EMAIL, PASSWORD} = process.env

let countFakeData = 0
export const sendData = async () => {
  const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(PAGE);
    await page.type('#frontend_authentications_login_form_email',EMAIL);
    await page.type('#frontend_authentications_login_form_password',PASSWORD);
    await page.click('.button')
    countFakeData =+1
    console.log('enviados', countFakeData,'dados falsos');
    await page.goto(PAGE);
    sendData()
    await page.reload()
  
    // await browser.close();
  }
  sendData()
