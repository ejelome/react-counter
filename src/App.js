import React, { useState } from "react";

const capitalize = (string) => {
  const first = string.charAt(0).toUpperCase();
  const rest = string.slice(1);

  return `${first}${rest}`;
};

const Title = ({ className, message }) => {
  const [text, setText] = useState(message);

  const handleChange = ({ target: { value } }) => setText(value);

  return (
    <div>
      <input
        placeholder="Enter new text"
        type="text"
        defaultValue={text}
        onChange={handleChange}
      />
      <h1 className={className}>{text}</h1>
    </div>
  );
};

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => setCount(count - 1);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <code>{count}</code>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

const CountList = ({ title, numbers }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {numbers.map((n) => (
        <li key={n}>{n}</li>
      ))}
    </ul>
  </div>
);

const App = () => {
  const title = "counter";

  const homePath = "/";
  const currentPath = window.location.pathname;

  const klass = "title";
  const text = currentPath === homePath && capitalize(title);

  const props = {
    className: klass,
    message: text,
  };

  return (
    <div className="App">
      <Title {...props} />
      <Counter initialCount={1} />
      <CountList title="Numbers" numbers={[1, 2, 3]} />
    </div>
  );
};

export default App;
