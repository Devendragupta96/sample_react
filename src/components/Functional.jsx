import React, { useState } from "react";

function Functional() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <button type="submit" onClick={increment}>
        Increment
      </button>
      <button type="submit" onClick={decrement}>
        Decrement
      </button>
      <h1>{number}</h1>
    </div>
  );
}

export default Functional;
