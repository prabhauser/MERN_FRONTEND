const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: 'https://sonar.techjini.com',
        token: '6112ab455844bf2b808d4b87d0f122a590ba4a4d',
        projectKey: 'adb-react-js', //identifier
        options: {
            'sonar.sources': './',
            'sonar.tests': './',
            'sonar.inclusions': '**', // Entry point of your code
            'sonar.test.inclusions': '**/**/*.test.tsx,**/**/*.test.ts',
            'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': './test-report.xml',
            'sonar.coverage.exclusions':
                '**src/app/features/Profile/**,**src/app/utils/**,**src/localisation/**,**src/services/**,**src/logger/**,**src/app/features/Dashboard/**,**src/adb-common/**,**src/app/router/**,**src/app/context/**,**src/app/_mocks_/**,**src/app/docs/**,**/*.test.tsx,node_modules/**,**src/app/assets/**'
        }
    },
    () => {}
);
