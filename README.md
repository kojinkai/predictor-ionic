[travis-image]: https://travis-ci.org/kojinkai/predictor-ionic.svg?branch=master
[travis-url]: https://travis-ci.org/kojinkai/predictor-ionic
[daviddm-image]: https://david-dm.org/kojinkai/predictor-ionic.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kojinkai/predictor-ionic
[coveralls-image]: https://coveralls.io/repos/kojinkai/predictor-ionic/badge.svg
[coveralls-url]: https://coveralls.io/r/kojinkai/predictor-ionic
[roadmap]: https://trello.com/b/Npci1zEG/predictor

# Predictor Ionic
[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Table of Contents
- [Features](#features)
- [Roadmap](#roadmap)
- [Installation & Configuration](#installation)
    - [Quick Start](#quick-start)
    - [NPM scripts commands](#npm-scripts)
- [Tips](#tips)
    - [Optional Libraries](#optional-libraries)
    - [Useful Links](#links)
    - [Ionic & Cordova](#ionic-cordova)
- [License](#license)

## <a name="features"></a>Features
- Ionic RC4
- [Es-Lodash](#optional-libraries) instead of Lodash to reduce final bundle size.
- [NVM](https://github.com/creationix/nvm) to manage multiple active node.js versions
- [Yarn](https://github.com/yarnpkg/yarn) for fast, reliable, and secure dependency management.
- [BetterScripts](https://github.com/benoror/better-npm-run) for better NPM scripts.
- ENV variables from package.json injected automatically.
- Documentation with [Typedoc](https://github.com/TypeStrong/typedoc/).
- Continuous Integration with Travis CI [see here for info][travis-url].
- Tests
    - Unit tests with Karma.
    - E2E tests with Protractor.
    - Screenshot reporter for Protractor.
    - Code coverage with Istanbul.
- Linting
    - [SCSS Lint](https://github.com/HugoGiraudel/sass-boilerplate) following Sass Guidelines.
    - TSlint with [Codelyzer](https://github.com/mgechev/codelyzer).
- GIT 
    - Workflow with [Commitizen](https://github.com/commitizen/cz-cli).
    - Automatic changelog.
    - Automatic alignment of app version in config.xml from package.json through cordova hook.

## <a name="roadmap"></a>Roadmap
The Trello board with the latest work in progress can be found [here][roadmap]

## <a name="installation"></a>Installation & Configuration
### <a name="quick-start"></a>Quick Start
```bash
# Required dependecies (on Mac Os also install ios-sim and ios-deploy)
npm i -g cordova ionic yarn
gem install scss_lint

# Clone the repo --depth 1 removes all but one .git commit history
git clone https://github.com/kojinkai/predictor-ionic.git

# Change directory
cd ionic2-boilerplate

# Install project dependencies
yarn
npm run post-install

# Launch ionic serve
npm run dev
```
**TO RUN IONIC: Make sure you have Node version >= 6.X and NPM >= 3** <br>
**TO RUN SCSS-LINT: Make sure you have Ruby >= 2** <br>
**TO RUN PROTRACTOR/E2E TESTS: Make sure you have Python = 2.X**

### <a name="npm-scripts"></a>NPM scripts commands
| Task              | Description                                            |
|-------------------|--------------------------------------------------------|
| `dev`             | Run ionic serve                                        |
| `build`           | Full production build. Use `--dev` flag for dev build. |
| `release`         | Generate changelog based on commits                    |
| `lint`            | Lint with tslint                                       |
| `scss-lint`       | Lint scss                                              |
| `test`            | Runs Karma test                                        |
| `test:watch`      | Runs Karma test watching for edits (TDD style)         |
| `e2e`             | Runs e2e protractor tests                              |
| `e2e:interactive` | Runs e2e protractor tests in interactive mode          |
| `docs`            | Generate code documentation through Typedoc            |
| `outdated`        | Search npm packages for outdated dependencies          |
| `post-install`    | Update web-driver to be able to run e2e tests.         |
| `ios:dev`         | Build .ipa using dev environment vars                  |
| `ios:release`     | Build .ipa with production environment vars            |
| `android:dev`     | Build .apk using dev environment vars                  |
| `android:release` | Build .apk with production environment vars            |

## <a name="tips"></a>Tips
### <a name="optional-libraries"></a>Optional Libraries
- Error logging: [Sentry](https://docs.sentry.io/clients/javascript/integrations/angular2/)
- Database: [PouchDB](https://pouchdb.com/) or [Ionic-storage](https://github.com/driftyco/ionic-storage). Don't use localstorage as it can be deleted by OS to free memory.
- Time and Dates: [MomentJs](http://momentjs.com/)
- [NGRX](https://github.com/ngrx/store) pattern/library if you plan to make a big app.

### <a name="git-workflow"></a>Git Workflow

* n.b. [Commitizen](https://github.com/commitizen/cz-cli) is installed

```
git add .
npm run commit // this will run tslint + scss lint + commit
// now check Travis
```

### <a name="links"></a>Useful Links
- [Search engine for find typescript typings](http://microsoft.github.io/TypeSearch/)
- [Cordova-xcode 8](https://dpogue.ca/articles/cordova-xcode8.html)
- [Ionic package setup](https://docs.ionic.io/services/package/)
- [Useful Hooks](https://github.com/driftyco/ionic-package-hooks)

### <a name="ionic-cordova"></a>Ionic & Cordova
- Avoid the use of ionic state commands and also ionic plugin/platform. Use directly cordova prepare (or cordova plugin/platform). Also save your plugin/platform only inside config.xml, not package.json to avoid confusion. See [this](https://github.com/driftyco/ionic-cli/issues/1324) for further informations. 

## <a name="license"></a>License
Apache-2.0 © [Lewis Nixon](http://boxdeluxe.io)
