# Folders and projects app

App https://folders-projects-example.netlify.app/

Storybook https://folders-projects-example.netlify.app/storybook/

- React app with react-router
- Storybook with components
- Mock data jn JSON file
- Mock API request

## Prerequisites

NodeJS version management with  https://github.com/creationix/nvm or https://github.com/coreybutler/nvm-windows
Yarn https://yarnpkg.com/

`nvm use` to activate NodeJS version used in this project (stored in `.nvmrc`)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn storybook`
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn build-storybook`

Builds Storybook to `/build/storybook`

## Deployment

Deployed with Netlify (on every `master` branch push).

