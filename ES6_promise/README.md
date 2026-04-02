# ES6 Promises

## Overview
This project covers the implementation and handling of Promises in ECMAScript 6 (ES6). It includes creating promises, handling them using `.then()`, `.catch()`, and `.finally()`, as well as managing multiple promises concurrently using `Promise.all()`, `Promise.allSettled()`, and `Promise.race()`. It also introduces error handling with `try...catch`.

## Requirements
* All files will be interpreted/compiled on Ubuntu 20.04 LTS using NodeJS 20.x.x and npm 9.x.x
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All files should end with a new line
* A `README.md` file at the root of the folder is mandatory
* Code should use the `.js` extension
* Code will be tested using Jest and verified against linting using ESLint
* All functions must be exported

## Setup
### Node Installation
```bash
curl -sL [https://deb.nodesource.com/setup_20.x](https://deb.nodesource.com/setup_20.x) -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y