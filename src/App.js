import React from "react";

const capitalize = (string) => {
  const first = string.charAt(0).toUpperCase();
  const rest = string.slice(1);
  return `${first}${rest}`;
};

const App = () => {
  const title = "counter";
  const klass = "title";
  const homePath = "/";
  const {
    location: { pathname: currentPath },
  } = window;
  return (
    <div className="App">
      <h1 className={klass}>{currentPath === homePath && capitalize(title)}</h1>
    </div>
  );
};

export default App;
