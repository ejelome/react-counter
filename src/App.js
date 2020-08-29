import React from "react";

const capitalize = (string) => {
  const first = string.charAt(0).toUpperCase();
  const rest = string.slice(1);
  return `${first}${rest}`;
};

const App = () => {
  const title = "counter";
  const homePath = "/";
  const {
    location: { pathname: currentPath },
  } = window;
  return <h1>{currentPath === homePath && capitalize(title)}</h1>;
};

export default App;
