// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadgeUrls = {
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause License': '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'GNU Affero General Public License v3.0': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'No License': ''
  };

  return licenseBadgeUrls[license];
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkUrls = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU General Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause License': 'https://opensource.org/licenses/BSD-3-Clause',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'GNU Affero General Public License v3.0': 'https://www.gnu.org/licenses/agpl-3.0',
    'The Unlicense': 'http://unlicense.org/',
    'No License': ''
  };

  return licenseLinkUrls[license];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (licenseBadge && licenseLink) {
    return `
## License
This project is licensed under the [${license}](${licenseLink}) license. ${licenseBadge}
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
1. Installation
2. Usage
3. Licens
4. Contribution
5. Test
6. Questions

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

## Contributions
${data.contributions}

## Tests
${data.test}

## Questions
- [GitHub Profile](https://github.com/${data.github})
- How to reach me: ${data.email}
`;
}

module.exports = generateMarkdown;
