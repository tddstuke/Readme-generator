// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (badge = license
    ? `[![License](https://img.shields.io/badge/License-${license}-brightgreen)](https://opensource.org/licenses/${license})`
    : `""`);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
    licence,
    username,
    email,
  } = data;

  return `
  # ${title}       
  ${badge}

## Description
${description}


${
  installation
    ? `## Installation Instructions
${installation}`
    : ""
}

## Usage Information
${usage}

## License 
${license}

## Contribution Guidelines
${contribution}

## Test Instructions
${test}
`;
}

module.exports = { generateMarkdown, renderLicenseBadge };
