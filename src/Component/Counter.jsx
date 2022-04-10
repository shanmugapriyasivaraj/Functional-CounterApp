import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [countValue, setCountValue] = useState(0);

  const increment = () => {
    console.log("Increment Button Clicked");
    if (countValue < 10) {
      setCountValue(countValue + 1);
    }
  };

  const decrement = () => {
    console.log("Decrement Button Clicked");
    if (countValue > 0) {
      setCountValue(countValue - 1);
    }
  };

  return (
    <div className="counter-container">
      <h2>Counter App</h2>
      <h4>Counter Value: {countValue}</h4>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
