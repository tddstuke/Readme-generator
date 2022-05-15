const today = new Date();
const year = today.getFullYear();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (badge = license
    ? `[![License](https://img.shields.io/badge/License-${license}-brightgreen)](https://opensource.org/licenses/${license.replace(
        "_",
        "-"
      )})`
    : `""`);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  switch (license) {
    case "MIT":
      return `
      MIT License
      
      Copyright (c) ${year} ${username}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
  }
  return licenseTxt;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badge) {
  const {
    title,
    description,
    installation,
    license,
    usage,
    contribution,
    test,
    username,
    email,
  } = data;

  return `
  # ${title}       
  ${badge}

  ## Table of Contents
 - [Description](#description)
  ${installation ? `- [Installation](#installation)` : ""}
  ${usage ? `- [Usage](#usage)` : ""}
  ${license ? `- [License](#license)` : ""}
  ${contribution ? `- [Contributions](#contribution)` : ""}
  ${test ? `- [Testing](#test)` : ""}
  - [Questions](#questions)

## Description <a id = "description"></a>
${description}


${
  installation
    ? `## Installation Instructions <a id = "installation"></a>
${installation}`
    : ""
}


${
  usage
    ? `## Usage Information  <a id = "usage"></a>
  ${usage}`
    : ""
}

## License  <a id = "license"></a>
Licensed under the [${license.replace(
    "_",
    " "
  )} License](https://opensource.org/licenses/${license.replace("_", "-")})


${
  contribution
    ? `## Contribution Guidelines  <a id = "contribution"></a>
${contribution}`
    : ""
}


${
  test
    ? `## Test Instructions  <a id = "test"></a>
${test}`
    : ""
}

## Questions  <a id = "questions"></a>
You can reach me through my GitHub account or through email listed below with any questions.
  - [My GitHub](https://github.com/${username})
  - [My email](mailto:${email})

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
