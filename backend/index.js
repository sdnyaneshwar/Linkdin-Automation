import puppeteer from 'puppeteer'
(
    async()=>
    {
       const browser =await  puppeteer.launch({
            headless: false,
            defaultViewport: false,
            userDataDir: './tmp'
       })
       const page = await browser.newPage();
      

       await page.goto('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
       const inputs =  await page.$$('.login__form')
       let username ='rrrdnyaneshwar@gmail.com';
       let password = 'Dnya@9421';
       
      // await page.waitForSelector('#username');

       // Input username and password securely (avoid storing credentials in code)
       const logInAvailable = await page.$('.member-profile-block') != null;
       
       if(logInAvailable)
       {
        await page.click('.member-profile-block')
        
       }
       else{

           await page.type('#username', username);
           await page.type('#password', password);
           
           
           // Submit the login form (consider using a button selector or click event)
           await page.click('.btn__primary--large.from__button--floating')
        }
       await page.waitForNavigation();

       await page.click('.feed-identity-module__member-photo.EntityPhoto-circle-5.evi-image.lazy-image.ember-view')

    }
)()