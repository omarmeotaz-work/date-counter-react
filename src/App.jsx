import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePrevStep() {
    setStep((s) => s - 1);
  }
  function handleNextStep() {
    setStep((s) => s + 1);
  }
  function handlePrevCount() {
    setCount((c) => c - step);
  }
  function handleNextCount() {
    setCount((c) => c + step);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="conatiner">
      <div className="steps">
        <button className="prevStep" onClick={handlePrevStep}>
          -
        </button>
        <p>step: {step}</p>
        <button className="nextStep" onClick={handleNextStep}>
          +
        </button>
      </div>
      <div className="count">
        <button className="prevCount" onClick={handlePrevCount}>
          -
        </button>
        <p>count: {count} </p>
        <button className="nextCount" onClick={handleNextCount}>
          +
        </button>
      </div>
      {count === 0 && <span>today is </span>}
      {count > 0 && <span>{count} days until </span>}
      {count < 0 && <span>{-count} days ago was </span>}
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
