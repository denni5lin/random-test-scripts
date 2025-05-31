const { Builder, By, until } = require('selenium-webdriver');

(async function loginToSite() {
  // Start browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Navigate to the site
    await driver.get('https://dapper-medovik-e61b40.netlify.app/');

    // 2. Wait for the password field to be visible
    const passwordField = await driver.wait(
      until.elementLocated(By.css('input[type="password"]')),
      5000
    );

    // 3. Enter the password
    await passwordField.sendKeys('My-Drop-Site');

    // 4. Click the submit button
    const submitButton = await driver.wait(
      until.elementLocated(By.css('button')),
      5000
    );
    await submitButton.click();

    // 5. Optional: Wait for success (e.g., check for page redirect or confirmation)
    await driver.sleep(3000); // just wait a few seconds to observe result
    console.log("Login submitted.");

  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();