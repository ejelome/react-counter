[![Netlify Status](https://api.netlify.com/api/v1/badges/5f159f75-490e-46e2-af2d-217403965063/deploy-status)](https://app.netlify.com/sites/ejelome-react-counter/deploys)

# react-counter

Learn [React](https://reactjs.org) with a counter.

---

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->

**Table of Contents**

- [react-counter](#react-counter)
  - [Demo](#demo)
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
    - [4. Component](#4-component)
    - [5. Props](#5-props)
    - [6. State](#6-state)
    - [7. Event](#7-event)
    - [8. List](#8-list)
    - [9. Form](#9-form)
    - [10. Thinking in React](#10-thinking-in-react)
    - [Bonus](#bonus)
  - [References](#references)
  - [License](#license)

<!-- markdown-toc end -->

---

## Demo

See <https://ejelome-react-counter.netlify.app>.

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

- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) _imports_ the new built-in [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) feature
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) or [constant](<https://en.wikipedia.org/wiki/Constant_(computer_programming)>) is a read-only alternative of [`var` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- `() =>` or [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) is a new alternative for [`function` declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
- [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) binds [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function), [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), or [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) from modules
- `` `${}` `` or [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) embeds expressions in [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)s
- `{ name : alias }` or [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unpacks values from [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)s or [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)s into named variables
- `(name = defaultValue)` or [default function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) sets default value on parameters instead of `undefined`

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
   $ npm start        # starts development server
   $ npm run build    # bundles app into static files for production
   $ npm [test|tst|t] # starts test runner
   $ npm eject        # destroys setup
   ```

   > **Warning:** <br />
   > The `npm eject` is a destructive operation and cannot be undone.

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
> - JSX supports [self-closing tag](https://dev.w3.org/html5/html-author/#self-closing-tag) (`<…/>`) special form
> - [`ReactDOM`](https://reactjs.org/docs/react-dom.html) escapes values embedded in JSX before render
> - These values are converted to `String`s before render to prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting)

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
> JSX expressions &hellip;
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
> JSX conditionals can be any JavaScript [conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

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
> JSX attributes &hellip;
>
> - are either the element's built-in HTML [attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute) or component's [props](https://reactjs.org/docs/components-and-props.html) (properties)
> - use [camelCase](https://en.wikipedia.org/wiki/Camel_case) as naming convention similar to JavaScript [properties](https://developer.mozilla.org/en-US/docs/Glossary/property/JavaScript)
> - can use JSX expressions (`{}`) or literal `String`s _but not both_ as values

> **Warning:** <br />
> JSX expressions in quotes are evaluated as literal `String`s (e.g. `"{klass}"` becomes `{klass}` not `title`).

#### 2.4. Children

```javascript
// file: src/App.js
// …
const App = () => {
  // …
  return (
    <div className="App">
      <h1 …>
    </div>
  );
// …
```

> **Note:** <br />
> JSX children are passed as nested elements or to `props`' `children` attribute.

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

_&hellip; and at the end becomes &hellip;_

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

```javascript
// file: src/App.js
// …
  // …
    <div …>
      <h1 …>
    // …
```

> **Notes:**
>
> - Elements are the smallest building blocks of a React app (what appears on screen)
> - Their names are written in _lowercase_ and are not required to be in scope
> - Once created, their attributes and children cannot be changed ([immutable](https://en.wikipedia.org/wiki/Immutable_object))
> - They can contain [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) elements, user-defined components, or both
> - Unlike DOM elements, React elements are plain JavaScript objects
> - [`ReactDOM`](https://reactjs.org/docs/react-dom.html) handles updating the DOM to match React elements
> - [`ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render) renders React elements into a _root_ DOM node

### 4. Component

```javascript
// file: src/App.js
import React from "react";
// …
const Title = (props) => <h1 className={props.className}>{props.title}</h1>;
// …
```

> **Notes:**
>
> - Components are similar to functions
> - They have input (`props`) and output (React element)
> - They are composed of elements or components or both
> - They should be treated as pure functions along with their `props`
> - Their names use [PascalCase](http://wiki.c2.com/?PascalCase) and are required to be in scope
> - There are two ways to create components: 1) with [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) or 2) with `function` (recommended)
> - `class`-style way of creating components, while will continue to work, is not anymore recommended
> - Return components using JSX conditionals or expressions for _conditional rendering_
> - Return `null` to hide components from rendering (but code blocks within components still executes)

### 5. Props

```javascript
// file: src/App.js
import React from "react";
// …
const Title = ({ className, title }) => <h1 className={className}>{title}</h1>;
// …
const App = () => {
  // …
  const props = {
    title: currentPath === homePath && capitalize(title),
    className: klass,
  };
  return (
    <div className="App">
      <Title {...props} />
    </div>
  // …
```

> **Notes:**
>
> - `props` is a single object passed as input to components
> - It contains both JSX attributes and children elements
> - It is a read-only property and must not be modified by components
> - Its property names should base on its component's PoV (not context use)

### 6. State

```javascript
// file: src/App.js
import React, { useState } from "react";
// …
const Counter = ({ initialState = 0 }) => {
  const [count, setCount] = useState(initialState);

  count < 3 && setCount(count + 1);

  return <code>{count}</code>;
};

const App = () => {
  // …
  return (
    <div className="App">
      // …
      <Counter />
    // …
```

> **Notes:**
>
> - `useState` is a [hook](https://reactjs.org/docs/hooks-intro.html) that allows adding local state to function components
> - It returns a pair (`[state, function]`) destructured with [`Array` destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)
> - It can have an initial value as its argument used on its component's first render
> - Using its function without any condition results an error (`Too many re-renders`)
> - It was introduced on React [v16.8.0](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html) to use React features without `class`es

### 7. Event

```javascript
// file: src/App.js
// …
const Counter …
  // …
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div>
      <div>
        <code>{count}</code>
      </div>
      <button onClick={handleDecrement}>-</button>
      {" / "}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
// …
```

> **Notes:**
>
> - Handling events in React elements are similar to DOM [events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
> - Event names use _camelCase_ instead of _lowercase_ (see [event reference](https://developer.mozilla.org/en-US/docs/Web/Events))
> - Event handlers are passed as functions and not `String`s
> - Use [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to prevent element's default behavior (`return false` do not work)

### 8. List

```javascript
// file: src/App.js
// …
const Counter …
  // …
  const operations = [
    { key: "decrement", symbol: "-", handler: () => setCount(count - 1) },
    { key: "increment", symbol: "+", handler: () => setCount(count + 1) },
  ];
  return (
    <div>
      // …
      {operations.map(({ key, symbol, handler }) => (
        <button key={key} onClick={handler}>
          {symbol}
        </button>
      ))}
      // …
```

> **Notes:**
>
> - Use `Array`'s [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to render multiple components
> - `key` is a special string attribute required on list of elements
> - It helps React to identify which items were modified
> - Only elements inside the `map` require unique keys
> - Unique keys are not required globally but only to siblings
> - Use keys that do not change (e.g. `id` instead of `index`)
> - Use `Object`'s [`toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method to convert objects to `String`s

### 9. Form

```javascript
// file: src/App.js
// …
const Title … => {
  const [newTitle, setNewTitle] = useState(title);
  const [newValue, setNewValue] = useState(title);

  const handleChange = ({ target: { value } }) => {
    setNewTitle(value);
    setNewValue(value);
  };

  return (
    <div>
      <form>
        <label htmlFor="new-title">New title:</label>
        <input
          id="new-title"
          type="text"
          value={newValue}
          onChange={handleChange}
        />
      </form>
      <h1 className={className}>{newTitle}</h1>
    </div>
  );
// …
```

> **Notes:**
>
> - Form elements such as [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) and [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) are called _controlled components_
> - Controlled components use values passed to `props` and changes through React events
> - In controlled components, values of form elements driven by React's state
> - The `<input>` element with `type="file"` as attribute is an example of uncontrolled component (read-only)
> - Use `htmlFor` instead of `for` (a [reserved keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)) attribute in [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) element
> - Use `value` attribute for controlled or `defaultValue` for uncontrolled but not both
> - Use `value` attribute for `<input>`, `<textarea>` and `<select>` elements to set values
> - Use `[name]` (`event.target.name`) to dynamically assign `value` to/from multiple inputs
> - Providing `null` or `undefined` values can accidentally make form elements editable
> - For a complete form solution, see [Formik](https://formik.org) form library (it also supports React Native)

### 10. Thinking in React

Have a consistent thought process when building React apps, e.g.:

1. **Start with a mock** (HTML to display data and [JSON](https://www.json.org/json-en.html) as source of data)
2. **Break UI into a component hierarchy** (boxes then bullet points)
3. **Build a static version** first (only use `props`; reserve state for interactivity)
4. **Identify the minimal representation of UI state** (make UI interactive with state; keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself))
5. **Identify where your state should live** (identify which components will own these state)
6. **Add inverse data flow** (support data flowing the other way around)

### Bonus

- There should be a [single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth) for any data that changes
- Prefer [unidirectional data flow](<https://en.wikipedia.org/wiki/Unidirectional_Data_Flow_(computer_science)>) instead of [two-way binding](https://angular.io/guide/two-way-binding) of data
- Use [React Development Tools](https://github.com/facebook/react/tree/master/packages/react-devtools) to inspect and debug `props` and state
- Prefer [composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) over [inheritance](<https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)>) for component hierarchy
- Components should ideally only do one thing well ([single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle))

---

## References

- [React](https://reactjs.org/docs) (Main Concepts)

---

## License

`react-counter` is licensed under [MIT](./LICENSE).
