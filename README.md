# react-counter

Learn [React](https://reactjs.org) with a counter.

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [react-counter](#react-counter)
  - [Lessons](#lessons)
    - [0. Setup](#0-setup)
    - [1. Component example](#1-component-example)
  - [License](#license)

<!-- markdown-toc end -->

---

## Lessons

### 0. Setup

1. Install [npm](https://npmjs.com) [CLI](https://github.com/npm/cli)

   > **Note:** <br />
   > It is recommended installing `npm` CLI with [nvm](https://github.com/nvm-sh/nvm).

2. Create boilerplate with [create-react-app](https://github.com/facebook/create-react-app)

   > **Note:** <br />
   > The `create-react-app` command includes [npm-run-script](https://docs.npmjs.com/cli/run-script)s:

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
