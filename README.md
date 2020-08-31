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
      - [2.4. Children](#24-children)
      - [2.5. Object representation](#25-object-representation)
    - [3. Element](#3-element)
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

To not confuse [React API](https://reactjs.org/docs/react-api.html) with [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)'s new syntax, the following are [ECMAScript 2015](http://ecma-international.org/ecma-262/6.0)+ new features:

- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) will import the new built-in [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) feature
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) or [constant](<https://en.wikipedia.org/wiki/Constant_(computer_programming)>) is a read-only alternative of [`var` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- `() =>` or [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is a new alternative of [`function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) will bind [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), or [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) from modules
- `` `${}` `` or [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) can embed expressions in [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)s
- `{:}` or [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) will unpack values from [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)s or [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)s into named variables

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
   $ npm start        # start development server
   $ npm run build    # bundle app into static files for production
   $ npm [test|tst|t] # start test runner
   $ npm eject        # destroy setup
   ```

   > **Warning:** <br /> > `npm eject`'s destructive operation cannot be undone.

### 1. Component example

```javascript
// file: src/App.js
import React from "react";

const App = () => <h1>Counter</h1>;

export default App;
```

> **Notes:**
>
> - `src/App.js` file is `import`ed and `render`ed at `src/index.js`
> - `<h1>Counter</h1>` is not [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) but [JSX](https://reactjs.org/docs/introducing-jsx.html) (or **J**ava**S**cript [**X**ML](https://developer.mozilla.org/en-US/docs/Web/XML))
> - JSX support [self-closing tag](https://dev.w3.org/html5/html-author/#self-closing-tag) (`<…/>`) special form
> - [`ReactDOM`](https://reactjs.org/docs/react-dom.html) escape values embedded in JSX before being rendered
> - These values are converted to `String`s before being rendered to prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting)

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

> **Notes:**
> JSX expression &hellip;
>
> - are pairs of curly braces (`{}`) that wraps code
> - become regular `function` calls evaluated to objects
> - accept any valid JavaScript expressions
> - can contain [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Binary_logical_operators), [conditional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Conditional_ternary_operator) or [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Equality_operators) operators
> - cannot contain [`if`…`else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) or [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) conditional statements

#### 2.2. Conditional

```javascript
// file: src/App.js
// …
const App = () => {
  // …
  const homePath = "/";
  const {
    location: { pathname: currentPath },
  } = window;
  return <h1>{currentPath === homePath && capitalize(title)}</h1>;
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
  return <h1 className={klass}>…
// …
```

> **Notes:**
> JSX attribute &hellip;
>
> - can either be the element's built-in HTML [attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute) or component's [props](https://reactjs.org/docs/components-and-props.html)
> - name use [camelCase](https://en.wikipedia.org/wiki/Camel_case) as naming convention similar to JavaScript [properties](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript)
> - value can either be a JSX expression (`{}`) or a literal `String` _but not both_

> **Warning:** <br />
> JSX expression in quotes is evaluated as a literal `String` (e.g. `"{klass}"` becomes `{klass}` not `title`).

#### 2.4. Children

```javascript
// file: src/App.js
// …
const App = () => {
  // …
  return (
    <div className="App">
      <h1 …
    </div>
  );
// …
```

> **Note:** <br />
> JSX children can be passed as a nested element or to `props`' attribute, `children`.

#### 2.5. Object representation

_This component &hellip;_

```javascript
// file: src/App.js
import React from "react";
// …
const App = () => {
  // …
  return (
    <div className="App">
      <h1 className={klass}>{currentPath === homePath && capitalize(title)}</h1>
    </div>
  );
// …
```

_&hellip; is equivalent to &hellip;_

```javascript
// file: src/App.js
import { createElement } from "react";
// …
const App = () => {
  // …
  return createElement(
    "div",
    { className: "App" },
    createElement(
      "h1",
      { className: klass },
      currentPath === homePath && capitalize(title)
    )
  );
// …
```

_&hellip; at the end becomes &hellip;_

```javascript
{
  type: "div",
  props: {
    className: "App",
    children: {
      type: "h1",
      props: {
        className: klass,
        children: currentPath === homePath && capitalize(title),
      },
    },
  },
};
```

> **Notes:**
>
> - [Babel](https://babeljs.io) compiles JSX components into [`React.createElement`](https://reactjs.org/docs/react-api.html#createelement) calls
> - `React.createElement` then creates JavaScript `Object`s called _React elements_

### 3. Element

```html
// file: src/App.js
// …
  // …
    <div …
      <h1 …
    // …
```

> **Notes:**
>
> - An elements is the smallest building block of a React app
> - Once created, its attributes and children cannot be changed ([immutable](https://en.wikipedia.org/wiki/Immutable_object))
> - A component (e.g. `App`) is _composed_ of elements (e.g. `div` and `h1`)
> - Unlike [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) elements, React elements are plain objects
> - [`ReactDOM`](https://reactjs.org/docs/react-dom.html) handles updating the DOM to match the elements
> - [`ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render) renders React element into a _root_ DOM node

---

## License

`react-counter` is licensed under [MIT](./LICENSE).
