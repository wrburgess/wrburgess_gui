# Infrastructure GUI

## Context

- [TOOL-1736 - Front End Framework for Golang Services](https://hireology.atlassian.net/browse/TOOL-1736)
- [TOOL-1737 - Golang front end service architecture strategy](https://hireology.atlassian.net/browse/TOOL-1737)
- [SYS-604 - Setup a hosting environment for React.js Interface](https://hireology.atlassian.net/browse/SYS-604)

## Objective

This repo represents a recommended path for building front-end interfaces associated with Hireology services:

- Create an independent front-end repo and application per service
- Utilize JavaScript/React for the application build
- Use OAuth and Google for authentication (in coordination with the Systems Pod)

## Dependencies

- Foundation: [Node.js](https://nodejs.org/en/), [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
- Bundling: [Parcel.js](https://parceljs.org/)
- Framework: [React.js](https://reactjs.org/)
- Components: [@hireology/molecules](https://github.com/Hireology/molecules)
- Styling: [Sass](https://sass-lang.com/)
- Typefaces: [Lato](https://fonts.google.com/specimen/Lato), “Helvetica Neue”, “Helvetica”, sans-serif
- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Unit Testing: [Jest](https://jestjs.io/), [Testing Library: React](https://testing-library.com/docs/react-testing-library/intro)
- Integration Testing: [Cypress](https://www.cypress.io/)

## Getting Started

### Set up Node Version Manager and Node

- [Install Node Version Manager](https://github.com/nvm-sh/nvm#installation-and-update) (nvm) and confirm installation with `command -v nvm` which should print `nvm`
- List local versions of Node: `nvm ls`
- List available versions of Node: `nvm ls-remote`
- Install a new version of Node: `nvm install node`
- Use the latest version of Node: `nvm use node`
- Check Node versions: `node -v` and `npm -v`
- For context, latest Node is `12.7.0` as of August 2019
- For context, latest npm is `6.10.3` as of August 2019

### Setup a New Repo

- Clone the repo: `git clone git@github.com:Hireology/infrastructure_gui.git [new-repo-name]`
- Move into directory: `cd [new-repo-name]`
- Install dependencies: `npm install`
- Check the build rendering: `npm run start`
- Visit test site: http://localhost:1234
- Run tests: `npm run test`

### Install ESLint and Prettier (Mac)

- Install ESLint globally with `npm i -g eslint`
- Install Prettier globally with `npm i -g prettier`
- Update global packages with `npm update -g`
- Run linting: `npm run lint`

### Configuration Files

- The `.eslintrc.js` file sets up configuration of ESLint syntax rules
- The `.prettierrc.js` file sets up configuration of Prettier formatting
- The `.babelrc.js` file allows parcel to transpile ES6+ and React code to ES5 code

## Recommendations

### Functional vs Class Components

Encouraged

```
// Functional Component

function ReactHeader(props) {
  return (
    <h1>
      React {props.version || 16} Documentation
    </h1>
  )
}
```

Discouraged

```
// Class Component

class ReactHeader extends React.Component {
  render() {
    return (
      <h1>
        React {this.props.version || 16} Documentation
      </h1>
    )
  }
}
```

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

## References

- [Setting up React with Parcel](https://parceljs.org/recipes.html)
- [Create a React app with zero configuration using Parcel](https://blog.jakoblind.no/react-parcel/)
- [Lean React Project With Parcel (and Sass)](https://medium.com/dailyjs/lean-react-project-with-parcel-a6ffe0fac0d2)
- [Write beautiful and consistent JavaScript code using ESLint, Prettier and VSCode](https://hackernoon.com/write-beautiful-and-consistent-javascript-code-using-eslint-prettier-and-vscode-760837fdef89)
- [Using Jest with Parcel Bundler](https://ryankubik.com/blog/parcel-and-jest/)
