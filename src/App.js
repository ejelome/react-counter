import React, { useState } from "react";

const capitalize = (string) => {
  const first = string.charAt(0).toUpperCase();
  const rest = string.slice(1);
  return `${first}${rest}`;
};

const Title = ({ className, title }) => <h1 className={className}>{title}</h1>;

const Counter = ({ initialState = 0 }) => {
  const [count, setCount] = useState(initialState);
  const operations = [
    { key: "decrement", symbol: "-", handler: () => setCount(count - 1) },
    { key: "increment", symbol: "+", handler: () => setCount(count + 1) },
  ];
  return (
    <div>
      <div>
        <code>{count}</code>
      </div>
      {operations.map(({ key, symbol, handler }) => (
        <button key={key} onClick={handler}>
          {symbol}
        </button>
      ))}
    </div>
  );
};

const App = () => {
  const title = "counter";
  const klass = "title";
  const homePath = "/";
  const {
    location: { pathname: currentPath },
  } = window;
  const props = {
    title: currentPath === homePath && capitalize(title),
    className: klass,
  };
  return (
    <div className="App">
      <Title {...props} />
      <Counter />
    </div>
  );
};

export default App;
