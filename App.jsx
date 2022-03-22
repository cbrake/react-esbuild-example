import React, { useCallback, useState } from "react";
import { Map } from "./Map";
import ReactDOM from "react-dom";

export const App = (props) => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);
  return (
    <>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <div style={{ height: "90vh" }}>
        <Map />
      </div>
    </>
  );
};
