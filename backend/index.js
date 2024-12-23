import puppeteer from 'puppeteer'
(
    async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: false,
            userDataDir: './tmp'
        })
        const page = await browser.newPage();


        await page.goto('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
        const inputs = await page.$$('.login__form')
        let username = 'rrrdnyaneshwar@gmail.com';
        let password = 'Dnya@9421';

        // await page.waitForSelector('#username');

        // Input username and password securely (avoid storing credentials in code)
        const logInAvailable = await page.$('.member-profile-block') != null;

        if (logInAvailable) {
            await page.click('.member-profile-block')

        }
        else {

            await page.type('#username', username);
            await page.type('#password', password);


            // Submit the login form (consider using a button selector or click event)
            await page.click('.btn__primary--large.from__button--floating')
        }
        await page.waitForNavigation();

        //await page.click('.feed-identity-module__member-photo.EntityPhoto-circle-5.evi-image.lazy-image.ember-view')
        await page.click('.artdeco-button.artdeco-button--muted.artdeco-button--4.artdeco-button--tertiary.ember-view')

        
        
        await page.waitForSelector('.share-promoted-detour-button__icon-container');
        //await page.click('.share-promoted-detour-button__icon-container');
        const [fileChooser] = await Promise.all([
            page.waitForFileChooser(),
            page.click('.share-promoted-detour-button__icon-container')
        ])
        //next
        await fileChooser.accept(['C:\\Users\\dnyaneshwar\\Downloads\\test.jpg']);         
        await page.waitForSelector('.share-box-footer__primary-btn.artdeco-button')
        await page.click('.share-box-footer__primary-btn.artdeco-button')
        // text
        await page.waitForSelector('div.ql-editor > p');
        await page.click('div.ql-editor > p');
        await page.evaluate(() => {
            const pTag = document.querySelector('div.ql-editor > p'); // Select the <p> tag inside the div.ql-editor
            if (pTag) {
                
                pTag.textContent = 'This is the new value'; // Set the content of the <p> tag
               
            }
        });
        
        // post
        await page.waitForSelector('.share-actions__primary-action.artdeco-button')
        await page.click('.share-actions__primary-action.artdeco-button')
        
        
        // await browser.close();


    }
)()