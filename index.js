// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter any installation instructions. If none press Enter.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Enter any current examples of your project in use. If none press Enter",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Enter any guidelines for others to contribute to your project. If none press Enter",
  },
  {
    type: "input",
    name: "test",
    message:
      "Enter any instructions for testing your project. If none press Enter",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application.",
    choices: ["MIT", "Apache_License_v2.0", "GNU_General_Public_License_v3.0"],
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username (Required).",
    validate: (userName) => {
      if (userName) {
        return true;
      } else {
        console.log("Please enter GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter an email address!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/Readme.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Readme Created!",
      });
    });
  });
}
function writeToLicense(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/License.txt", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "License text Created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((readMeData) => {
    console.log(readMeData);
    renderLicenseBadge(readMeData.license);
    renderLicenseLink(readMeData.license);
    return generateMarkdown(readMeData, badge);
  })
  .then((pageData) => {
    console.log(pageData);
    return writeToFile(pageData);
  });
