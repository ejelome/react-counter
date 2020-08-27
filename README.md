# react-counter

Learn [React](https://reactjs.org) with a counter.

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [react-counter](#react-counter)
  - [ES2015+](#es2015)
  - [Lessons](#lessons)
    - [0. Setup](#0-setup)
    - [1. Component example](#1-component-example)
  - [License](#license)

<!-- markdown-toc end -->

---

## ES2015+

To not confuse [React API](https://reactjs.org/docs/react-api.html) with the new [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) syntax, the following are from [ECMAScript 2015](http://ecma-international.org/ecma-262/6.0) and beyond:

- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) to import the new built-in [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) feature
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) as the read-only alternative of [`var` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- `() =>` or [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) as the new alternative for [`function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) to bind [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), or [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) from a module

---

## Lessons

### 0. Setup

1. Install [npm](https://github.com/npm/cli) CLI

   > **Note:** <br />
   > It is recommended installing `npm` CLI with [nvm](https://github.com/nvm-sh/nvm).

2. Create boilerplate with [create-react-app](https://github.com/facebook/create-react-app)

   > **Note:** <br />
   > It is recommended to run `create-react-app` with [npx](https://github.com/npm/npx).

   **Example:**

   ```shell
   $ npx create-react-app <project-directory>
   ```

3. `create-react-app` includes [npm-run-script](https://docs.npmjs.com/cli/run-script)s:

   ```shell
   $ npm start        # starts the development server
   $ npm run build    # bundles the app into static files for production
   $ npm [test|tst|t] # starts the test runner
   ```

   > **Warning:** <br />
   > The `npm eject` command will destroy the setup, there's no undo!

### 1. Component example

```javascript
// file: src/App.js
import React from "react";

const App = () => <h1>Counter</h1>;

export default App;
```

> **Notes:** <br />
> The `src/App.js` file is `import`ed then `render`ed to `src/index.js`

---

## License

`react-counter` is licensed under [MIT](./LICENSE).
