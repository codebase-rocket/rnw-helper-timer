# rnw-helper-timer


## Table of Contents
- [Introduction]
- [Installation]
- [LoadingLibrary]
- [Usage]
- [Dependencies]


## Introduction

`UseTimer` is a custom hook designed for managing time intervals in React applications. This hook provides a convenient way to start, stop, and schedule timers based on intervals or specific times. It uses React's `useEffect`, `useCallback`, and `useRef` for efficient timer management.


## Installation

Install the module using npm:

1. Add the following dependency to your `package.json`:

    ```json
    "dependencies": {
      "rn-helper-timer": "npm:@codebase-rocket/rn-helper-timer@^1.0.0",    }
    ```

2. Execute the following command:

    ```bash
    npm install
    ```

## Loading in Project

Load the hook in your React application:

  ```javascript
    // Import the custom timer hook
    const UseTimer = require('rn-helper-timer')(Lib, Config);

    // Example usage:
    const timerRefs = useRef({});
    const timer = UseTimer(timerRefs);

  ```

## Usage

  ```javascript

    // Start an interval-based timer
    const timerId = timerActions.start(func, timeIntervalInSeconds);

    // Start a schedule-based timer
    timerActions.startSchedule(func, targetHour, targetMinute);

    // Stop a specific timer
    timerActions.stop(timerId);

    // Stop all timers
    timerActions.stopAll();

  ```


  ## Dependencies

  Ensure your project has the following dependencies:

  1. React




