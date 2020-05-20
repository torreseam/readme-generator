// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  
# ${data.title}


-----
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) ![badmath](https://img.shields.io/badge/License-Apache%202.0-lightgrey)
  ![badmath](https://img.shields.io/badge/License-MIT-blue) ![badmath](https://img.shields.io/badge/License-GPL-yellow)

-----

## Description
------

  ${ data.description}

## Table of Contents
------

* [Installation](#installation)

* [Usage](#usage)

* [Technologies](#technologies)

* [License](#licenses)

## Installation

 ${data.installation}

  ## Usage

  ${data.usage}

  ## Technologies

  ![badmath](https://img.shields.io/badge/Technology-Node-red)

  ![badmath](https://img.shields.io/badge/Technology-HTML-orange)

  ![badmath](https://img.shields.io/badge/Technology-CSS-yellowgreen)

  ![badmath](https://img.shields.io/badge/Technology-NMP-brightgreen)

  ${data.technologies}

  ## Licenses

  MIT License

  Copyright (c) [year] [fullname]

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
  SOFTWARE.

 ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

 ![badmath](https://img.shields.io/badge/License-Apache%202.0-lightgrey)

 ![badmath](https://img.shields.io/badge/License-MIT-blue)

 ![badmath](https://img.shields.io/badge/License-GPL-yellow)


  ${data.licenses}

  ## Questions


  Any questions please contact [GitHub Profile](https://github.com/${data.userName}) or by email at [${data.userEmail}](${data.userEmail})


  `;

}

// const getBadge = licenses => {
//   const licensesNoSpace = licenses.replace(" ", "20%")
//   return`
//     img href="https://img.shields.io/static/v1?=licenses&messages=${licenses}&color-green"
// }

module.exports = generateMarkdown;