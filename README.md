# Quarentine Reactionaries

# ![Node/Express/Mongoose Project App](public/projectLogo.png) 
## Live hosted site [here](https://blitz-studio-react.azurewebsites.net/)
---
This repo is functionality complete — PRs and issues are welcome!

## Dependencies

- axios
- bootstrap
- moment
- node-sass
- rc-progress
- react-bootstrap
- react-circular-progressbar
- react-dom
- react-redux
- react-router
- react-router-dom
- react-scripts
- redux
- redux-thunk

## Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm sart` to start the local server

## Application Structure

- `index.js` - The entry point to our application..

- `src/components` - This folder contains all the components and their corresponding css file.

- `src/models/` - This folder contains the schema definitions for our Mongoose models.

- `public/` - This folder contains the static files.

## Authentication and authorization

Requests are authenticated using username and password and routes are guarded by role based authorization

<br />

## Continuous Integration and Continuous Delivery (CI/CD)

- [Azure devops ](https://dev.azure.com) was used for CI/CD
- The `master` branch is guarded by branch policy and continous integration is triggerd only after successful pull request approval


## Authors
* Michael Woldemedihin
* Sophia Blitz
* Mahmoud Magdy

## License

This project is licensed under the MIT License 