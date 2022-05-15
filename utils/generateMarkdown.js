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
// Don't Need
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  switch (license) {
    case "MIT":
      return `
      MIT License
      
      Copyright (c) ${year} ${name}

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

    case "Apache_2.0":
      return `
  Apache  License, Version 2.0

  Copyright ${year} ${name}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`;

    case "AGPL_3.0":
      return `
     GNU Affero General Public License, Version 3.0

     Copyright (C) ${year} ${name}

     This program is free software: you can redistribute it and/or modify
     it under the terms of the GNU Affero General Public License as published
     by the Free Software Foundation, either version 3 of the License, or
     (at your option) any later version.
 
     This program is distributed in the hope that it will be useful,
     but WITHOUT ANY WARRANTY; without even the implied warranty of
     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     GNU Affero General Public License for more details.
 
     You should have received a copy of the GNU Affero General Public License
     along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
  }
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
  ${renderLicenseBadge(license)}

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
Licensed under the [${license.replace("_", " ")} License](./License.txt)


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

  renderLicenseSection,
};
