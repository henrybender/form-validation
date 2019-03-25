This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Author: Henry Bender

## To RUN
`npm install`
`npm start`

## About the App:
This is a basic form validation app that I wrote. It is my first time writing javascript and using React. 

The 4 input fields are name, email, phone, and blog. Each of them is matched to a regexp to check for its validity. The form will display a completed message if all 4 fields are filled out properly. 

The fields check for:
* Name: A string that consists of between 3 and 30 (inclusive) upper and lower case English alphabetic letters only.
* E-mail: A standard email address. For example, user@domain.extension is valid but user@domain is not.
* Phone: A 10-digit number that does not begin with 0 or 1.
* Blog URL: A standard URL that covers cases such as http://domain.extension, http://www.domain.extension, www.domain.extension, and domain.extension.

I added a couple unit tests for my form validation function but did not have the chance to do component testing. 

Some features I did not have time to implement but would've liked to are:
- Red highlighting for those fields that were not valid upon submission
- span messages below each field specifying what made the input invalid upon submission
- alerts for invalid fields



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
