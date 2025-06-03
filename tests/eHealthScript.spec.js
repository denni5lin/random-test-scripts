const {By, Builder, until} = require('selenium-webdriver');
const assert = require('assert');

async function eHealthTest() {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the eHealth website
        await driver.get('https://www.ehealthinsurance.com/');

        const zipField = await driver.wait(
            until.elementLocated(By.css('input[name="zipcode"]')),
            5000
        );
        await zipField.sendKeys('90001');
        // Wait for the continue button to be present and click it
        await driver.sleep(1000); // Wait for the input to be processed
        const continueButton = await driver.wait(
            until.elementLocated(By.css('button[data-qa="Hero:Zipform:Submit"]')),
            5000
        );
        await continueButton.click();

        const msTab = await driver.wait(
            until.elementLocated(By.css('button[data-qa="Quote:PlanTypeSelector:MS"]')),
            5000
        );
        await msTab.click();
    
    } 
    catch (error) {
        console.error("Test failed:", error);
    } 
    finally {
    await driver.quit();
    }
}

eHealthTest()