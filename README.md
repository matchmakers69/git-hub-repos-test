# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App despription
App styled with styled-components - added global styles and theme with types

### Search functionality
User can type a phrase into input and after clicking submit search results will be displayed. Fetching data could take a place on change but due to time limitation (adding debounce), fetching is called onSubmit.

### Tests
Unfortunately adding 100% tests coverage was not possible due to time limit, however I added unit test for fetching data function and a bit more integration test for SearchInput


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


