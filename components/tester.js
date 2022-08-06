import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function IncrementCounter(props) {
    return (
      <button onClick={() => props.setCounter(oldValue => oldValue + 1)}>
        Test
      </button>
    );
  }

  return (
    <div className="App">
      <h1>Counter variable : {counter}</h1>
      <IncrementCounter setCounter={setCounter} />
    </div>
  );
}

