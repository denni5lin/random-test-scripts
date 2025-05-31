const {By, Builder, Browser, until} = require('selenium-webdriver');
const assert = require('assert');

async function eHealthTest() {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();

    try {
    // Navigate to the eHealth website
    await driver.get('https://www.ehealthinsurance.com/');
    // await driver.manage().window().maximize();
    // and check the title
    let title = await driver.getTitle();
    assert.equal("Find Medicare, Individual & Group Health Insurance | eHealth", title);

    await driver.manage().setTimeouts({implicit: 5000});

    // Enter the zip code
    let zipInput = await driver.findElement(By.css('input[data-qa="Hero:Zipform:ZipInput"]'));
    await zipInput.clear();
    await zipInput.sendKeys('97206');
    // Wait for county select to be available
    // Select the county from the dropdown
    let countySelect = await driver.findElement(By.css('select[data-qa="Hero:Zipform:CountySelect"]'));
    await driver.wait(until.elementLocated(countySelect), 5000);
    // await driver.wait(until.elementIsVisible(countySelect), 5000);      
    await countySelect.click();
    await countySelect.findElement(By.css('option[value="MULTNOMAH"]')).click();
    // Click button to continue
    let submitButton = await driver.findElement(By.css('button[data-qa="Hero:Zipform:Submit"]')); 
    await submitButton.click();
    
    } catch (e) {
    console.log(e)
    } finally {
    await driver.quit();
    }
}

eHealthTest()