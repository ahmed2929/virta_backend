### virta project stream evrywhere
-backeEnd team

### structure
| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **.github**              | Contains GitHub settings and configurations, incuding the GitHub Actions workflows            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/config**           | Passport authentication strategies and login middleware. Add other complex config code here   |
| **src/controllers**      | Controllers define functions that respond to various http requests                            |
| **src/models**           | Models define Mongoose schemas that will be used in storing and retrieving data from MongoDB  |
| **src/public**           | Static assets that will be used client side                                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)          |
| **src**/server.ts        | Entry point to your express app                                                               |
| **test**                 | Contains your tests. Separate from source because there is a different build process.         |
| **views**                | Views define how your app renders on the client. In this case we're using pug                 |
| .env.example             | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| .travis.yml              | Used to configure Travis CI build                                                             |
| .copyStaticAssets.ts     | Build script that copies images, fonts, and JS libs to the dist folder                        |
| jest.config.js           | Used to configure Jest running tests written in TypeScript                                    |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tsconfig.tests.json      | Config settings for compiling tests written in TypeScript                                     |
| .eslintrc                | Config settings for ESLint code style checking                                                |
| .eslintignore            | Config settings for paths to exclude from linting                                             |

### Running scripts

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `build`                   | Full build. Runs ALL build tasks (`build-sass`, `build-ts`, `lint`, `copy-static-assets`)       |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task         |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). Use this if you're not touching static assets.     |
| `test`                    | Runs tests using Jest test runner                                                                 |
| `watch-test`              | Runs tests in watch mode                                                                          |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                                 |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed                |
| `build-sass`              | Compiles all `.scss` files to `.css` files                                                          |
| `watch-sass`              | Same as `build-sass` but continuously watches `.scss` files and re-compiles when needed            |
| `lint`                    | Runs ESLint on project files                                                                       |
| `copy-static-assets`      | Calls script that copies JS libs, fonts, and images to dist directory                             |
| `debug`                   | Performs a full build and then serves the app in watch mode                                       |
| `serve-debug`             | Runs the app with the --inspect flag                                                               |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger                   |


## `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.               |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| bluebird                        | Promise library                                                       |
| body-parser                     | Express 4 middleware.                                                 |
| compression                     | Express 4 middleware.                                                 |
| connect-mongo                   | MongoDB session store for Express.                                    |
| dotenv                          | Loads environment variables from .env file.                            |
| errorhandler                    | Express 4 middleware.                                                 |
| express                         | Node.js web framework.                                                |
| express-flash                    | Provides flash messages for Express.                                   |
| express-session                 | Express 4 middleware.                                                 |
| express-validator               | Easy form validation for Express.                                     |
| fbgraph                         | Facebook Graph API library.                                           |
| lodash                          | General utility library.                                              |
| lusca                           | CSRF middleware.                                                      |
| mongoose                        | MongoDB ODM.                                                          |
| nodemailer                      | Node.js library for sending emails.                                   |
| passport                        | Simple and elegant authentication library for node.js                 |
| passport-facebook               | Sign-in with Facebook plugin.                                         |
| passport-local                  | Sign-in with Username and Password plugin.                            |
| pug (jade)                      | Template engine for Express.                                          |
| request                         | Simplified HTTP request library.                                       |
| request-promise                 | Promisified HTTP request library. Let's us use async/await             |
| winston                         | Logging library                                                       |

## `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| @types                          | Dependencies in this folder are `.d.ts` files used to provide types    |
| chai                            | Testing utility library that makes it easier to write tests            |
| concurrently                    | Utility that manages multiple concurrent tasks. Used with npm scripts  |
| jest                            | Testing library for JavaScript.                                        |
| node-sass                       | Allows to compile .scss files to .css                                  |
| nodemon                         | Utility that automatically restarts node process when it crashes       |
| supertest                       | HTTP assertion library.                                                |
| ts-jest                         | A preprocessor with sourcemap support to help use TypeScript with Jest.|
| ts-node                         | Enables directly running TS files. Used to run `copy-static-assets.ts` |
| eslint                          | Linter for JavaScript and TypeScript files                             |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity   |

To install or update these dependencies you can use `npm install` or `npm update`.
