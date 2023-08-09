// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (license === "none") {
  //   return // something here
  // } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.license === "none" ? "" : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"}  
  ## Title
  ${data.title} 
  ## Table of Contents
  * [Description](#Description)
  * [Installations](#Installations)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Testing](#testing)
  * [Contributors](#contributors)
  * [Questions](#questions)
  * [GitHub](#github)
  * [License](#license)
  ## Description
  ${data.description}
  ## Installations
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Testing
  ${data.tests}
  ## Contributors
  ${data.contributions}
  ## Questions
  ${data.questions}
  ## GitHub
  ${data.github}
  ## License
`;
}

module.exports = generateMarkdown;