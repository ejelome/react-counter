# react-counter

Learn [React](https://reactjs.org) with a counter.

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [react-counter](#react-counter)
  - [Usage](#usage)
    - [Install](#install)
    - [Serve](#serve)
  - [ES2015+](#es2015)
  - [Lessons](#lessons)
    - [0. Setup](#0-setup)
    - [1. Component example](#1-component-example)
    - [2. JSX](#2-jsx)
      - [2.1. Expression](#21-expression)
      - [2.2. Conditional](#22-conditional)
      - [2.3. Attribute](#23-attribute)
  - [License](#license)

<!-- markdown-toc end -->

---

## Usage

### Install

```shell
$ npm [install|isntall|add|i]
```

### Serve

```shell
$ npm start
```

---

## ES2015+

To not confuse [React API](https://reactjs.org/docs/react-api.html) with the new [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) syntax, the following are from [ECMAScript 2015](http://ecma-international.org/ecma-262/6.0) and beyond:

- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) will import the new built-in [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) feature
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) is the read-only alternative of [`var` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- `() =>` or [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is the new alternative of [`function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) will bind [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), or [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) from a module
- `` `${}` `` or [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) can embed expressions in a [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- `{:}` or [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) will unpack values from an [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) into named variables

---

## Lessons

### 0. Setup

1. Install [`npm` CLI](https://github.com/npm/cli)

   > **Note:** <br />
   > It is recommended to install `npm` CLI with [`nvm`](https://github.com/nvm-sh/nvm).

2. Create boilerplate with [`create-react-app`](https://github.com/facebook/create-react-app)

   > **Note:** <br />
   > It is recommended to run `create-react-app` with [`npx`](https://github.com/npm/npx).
   >
   > **Example:**
   >
   > ```shell
   > $ npx create-react-app <project-directory>
   > ```

3. `create-react-app` includes a couple of [`npm-run-script`](https://docs.npmjs.com/cli/run-script)s:

   ```shell
   $ npm start        # starts the development server
   $ npm run build    # bundles the app into static files for production
   $ npm [test|tst|t] # starts the test runner
   ```

   > **Warning:** <br />
   > `npm eject` will destroy the setup (there's no undo!).

### 1. Component example

```javascript
// file: src/App.js
import React from "react";

const App = () => <h1>Counter</h1>;

export default App;
```

> **Notes:** <br />
>
> - `src/App.js` file is `import`ed then `render`ed to `src/index.js`
> - `<h1>Counter</h1>` is not [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) but [JSX](https://reactjs.org/docs/introducing-jsx.html) (or **J**ava**S**cript [**X**ML](https://developer.mozilla.org/en-US/docs/Web/XML))

### 2. JSX

#### 2.1. Expression

```javascript
// file: src/App.js
// …
const capitalize = (string) => {
  const first = string.charAt(0).toUpperCase();
  const rest = string.slice(1);
  return `${first}${rest}`;
};

const App = () => {
  const title = "counter";
  return <h1>{capitalize(title)}</h1>;
};
// …
```

> **Notes:** <br />
> JSX expression &hellip;
>
> - are pairs of curly braces (`{}`) that wraps code
> - become regular `function` calls evaluated to objects
> - accept any valid JavaScript expressions
> - can include JSX expressions such as [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Binary_logical_operators), [conditional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Conditional_ternary_operator) or [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Equality_operators) operators
> - can't contain conditional statements such as [`if`…`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) can't be used in JSX expression

#### 2.2. Conditional

```javascript
// file: src/App.js
// …
const App = () => {
  const title = "counter";
  const homePath = "/";
  const {
    location: { pathname: currentPath },
  } = window;
  return <h1>{currentPath === homePath && capitalize(title)}</h1>;
};
// …
```

> **Note:** <br />
> JSX conditional can be any JavaScript [conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

#### 2.3. Attribute

```javascript
// file: src/App.js
// …
const App = () => {
  // …
  const klass = "title";
  // …
    <h1 className={klass}>…</h1>
// …
```

> **Note:** <br />
> JSX attribute &hellip;
>
> - can either be the element's built-in HTML [attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute) or the component's [props](https://reactjs.org/docs/components-and-props.html)
> - name uses [camelCase](https://en.wikipedia.org/wiki/Camel_case) as naming convention similar to JavaScript [properties](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript)
> - value can either be a JSX expression (`{}`) or a literal `String` (`""` or `''`) *but not both*

---

## License

`react-counter` is licensed under [MIT](./LICENSE).
