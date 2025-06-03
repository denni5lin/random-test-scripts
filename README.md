# random-test-scripts

This repository contains example Selenium WebDriver scripts for browser automation and UI testing using Node.js.

## Project Structure

random-test-scripts/ 
├── `package.json` 
└── tests/ 
    ├── `eHealthScript.spec.js` 
    └── `testScript.spec.js`

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Google Chrome](https://www.google.com/chrome/)
- ChromeDriver (installed automatically via `chromedriver` dev dependency)

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:denni5lin/random-test-scripts.git
    cd random-test-scripts
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

> **Note:** The test scripts are standalone and not integrated with a test runner. Run them directly with Node.js.

### Run the eHealth Insurance test

```sh
node tests/eHealthScript.spec.js
```

### Run the Simple Login test

```sh
node tests/testScript.spec.js
```

## Scripts

- `tests/eHealthScript.spec.js`: Automates filling out the zip code and selecting a plan type on eHealthInsurance.com.

- `tests/testScript.spec.js`: Automates a login flow on a sample login page.