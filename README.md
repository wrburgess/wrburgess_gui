# Infrastructure GUI

## Approach

This repo represents a "recommended path" for building front-end interfaces for Hireology services:

- Create an independent front-end repo and application per service
- Utilize JavaScript/React for the application build
- Use OAuth and Google for authentication in coordination with the Service Team
- Host each application separately from the service

## Dependencies

- Foundation: [Node.js](https://nodejs.org/en/), [Node Version Manager](https://github.com/nvm-sh/nvm)
- Bundling: [Parcel.js](https://parceljs.org/)
- Framework: [React.js](https://reactjs.org/)
- Components: [@hireology/molecules](https://github.com/Hireology/molecules)
- Styling: [Sass](https://sass-lang.com/)
- Testing: [Jest](https://jestjs.io/), [Cypress](https://www.cypress.io/)
- Linting: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- Fonts: [Lato](https://fonts.google.com/specimen/Lato), “Helvetica Neue”, “Helvetica”, sans-serif`

## References

- [Setting up React with Parcel](https://parceljs.org/recipes.html)
- [Create a React app with zero configuration using Parcel](https://blog.jakoblind.no/react-parcel/)
- [Lean React Project With Parcel (and Sass)](https://medium.com/dailyjs/lean-react-project-with-parcel-a6ffe0fac0d2)

## Getting Started

### Set up Node Version Manager and Node

- [Install Node Version Manager](https://github.com/nvm-sh/nvm#installation-and-update) (nvm) and confirm installation with `command -v nvm` which should print `nvm`
- List local versions of Node: `nvm ls`
- List available versions of Node: `nvm ls-remote`
- Install a new version of Node: `nvm install node`
- Use the latest version of Node: `nvm use node`
- Check Node version: `node -v`
- For context, latest Node is `12.7.0` as of Aug 5, 2019

### Setup a New Repo

- Clone the repo: `git clone git@github.com:Hireology/infrastructure_gui.git [new-repo-name]`
- Move into directory: `cd [new-repo-name]`
- Install dependencies: `npm install`
- Test build works: `npm run start`
- Visit test site: http://localhost:1234
- Run tests: `npm run test`

### Install ESLint and Prettier (Mac)

- Install ESLint globally with `npm i -g eslint`
- Install Prettier globally with `npm i -g prettier`
- Update global packages with `npm update -g`

### Configuration Files

- The `.eslintrc.js` file sets up configuration of ESLint syntax rules
- The `.prettierrc.js` file sets up configuration of Prettier formatting
- The `.babelrc.js` file allows parcel to transpile ES6+ and React code to ES5 code

## Recommendations

### Directory and File Organization

- Aim for a "modular" structure with grouping by component-related files, not by file-type. Examples:

Encouraged

```
/components
  Component_1.js
  Component_1.scss
  Component_1.test.js
  Component_2.js
  Component_2.scss
  Component_2.test.js
```

Discouraged

```
/components
  Component_1.js
  Component_2.js
/tests
  Component_1.test.js
  Component_2.test.js
/styles
  Component_1.scss
  Component_2.scss
```

## Priorities

- Load a molecule component

## Getting Started

- git clone
- install dependencies
- run local server
- run tests
- get help

## TODO

- Mention setup for NVM (Node Version Manager)
- Mention setup for Node and setting version
- Mention setup for npm
- Install node packages
- Explain Google Auth
- Changing Linter Rules
