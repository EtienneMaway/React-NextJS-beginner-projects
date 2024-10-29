import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="number">{count}</h1>

      <div className="btns-container">
        <button className="increment" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button
          className="increment"
          style={{ position: "relative" }}
          onClick={() => setCount(0)}
        >
          <img src="/reset.png" className="image" alt="" />
        </button>
        <button className="increment" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
