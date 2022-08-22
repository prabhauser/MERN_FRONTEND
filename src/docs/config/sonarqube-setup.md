# SonarQube Configuration

## Step 1

Install the following npm packages as dev dependencies,

-   sonarqube-scanner
-   jest-sonar-reporter

```
npm install -D sonarqube-scanner jest-sonar-reporter
```

## Step 2

Include the following scripts of sonar in package.json

```
 "scripts": {
        "sonar":  "node sonar-project.js",
    },
     "jestSonar": {
    "reportPath": "coverage",
    "reportFile": "test-reporter.xml",
    "indent": 4
  },
```

## Step 3

Create a file named 'sonar-project.js' in the project root directory with the following content.

```js
const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: 'https://sonar.techjini.com',
        token: '6112ab455844bf2b808d4b87d0f122a590ba4a4d',
        projectKey: 'adb-react-js', //identifier

        options: {
            'sonar.sources': './',
            'sonar.tests': './unit-tests',
            'sonar.inclusions': '**', // Entry point of your code
            'sonar.test.inclusions': 'unit-tests/**/*.test.js',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
        }
    },
    () => {}
);
```

## Step 4

To generate the code coverage report, execute the following command

```
npm run coverage
```

## Step 5

Once the code coverage report is generated , execute

```
npm run sonar
```

[Ref Docs](https://medium.com/swlh/nodejs-code-evaluation-using-jest-sonarqube-and-docker-f6b41b2c319d)
