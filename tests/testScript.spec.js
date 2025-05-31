const { Builder, By, until } = require('selenium-webdriver');

(async function loginToSite() {
  // Start browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Navigate to the site
    await driver.get('https://denni5lin.github.io/simple-login-practice/');

    // 2. Wait for the username field to be visible
    const usernameField = await driver.wait(
      until.elementLocated(By.css('input[type="text"]')),
      5000
    );
    // 3. Enter the username
    await usernameField.sendKeys('testuser');

    // 4. Wait for the password field to be visible
    const passwordField = await driver.wait(
      until.elementLocated(By.css('input[type="password"]')),
      5000
    );

    // 5. Enter the password
    await passwordField.sendKeys('Test123');

    // 6. Click the submit button
    const submitButton = await driver.wait(
      until.elementLocated(By.css('button')),
      5000
    );
    await submitButton.click();

    // 7. Wait for success (e.g., check for page redirect or confirmation)
    await driver.sleep(3000); // wait 3 seconds to observe result
    console.log("Login submitted.");

  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();