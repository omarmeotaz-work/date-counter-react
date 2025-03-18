import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePrevCount() {
    setCount((c) => c - Number(step));
  }
  function handleNextCount() {
    setCount((c) => c + Number(step));
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="conatiner">
      <div className="steps">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <p>step: {step}</p>
      </div>
      <div className="count">
        <button className="prevCount" onClick={handlePrevCount}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button className="nextCount" onClick={handleNextCount}>
          +
        </button>
      </div>
      <div>
        {count === 0 && <span>today is </span>}
        {count > 0 && <span>{count} days until </span>}
        {count < 0 && <span>{-count} days ago was </span>}
        <span>{date.toDateString()}</span>
      </div>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
