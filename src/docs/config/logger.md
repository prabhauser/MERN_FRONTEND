# Logger for Console.log in ADB-WEB

## Purpose

We basically use the console.log() in our TS application to check whether our code is working properly or to replicate the bug or issue in the app. Without the logs it is very time consuming and difficult to find the problem.

But these logs are meant for the developer only and we don't want to show these to the end users.

For that we have introduced a wrapper function (logger function : src/logger/logger.ts) that will log the consoles and it is controlled by a switch which is declared in the root index file: src/index.tsx

```ts
export const debugSwitch = true;
```

## Logger function

Logger function will wrap the console logs and its arguments are message and function that invokes the logger.

It can be invoked wherever we need console.log statements.

Example:

```ts
import { logger } from '../../../logger/logger';

logger({ message: 'message', fun: 'test' });
```
