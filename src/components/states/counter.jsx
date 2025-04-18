import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [threshhold, setThreshhold] = useState(1);

  const increment = () => {
    setCount(count + threshhold);
  };
  const decrement = () => {
    setCount(count - threshhold);
  };
  const incrementThreshhold = () => {
    setThreshhold(threshhold + 1);
  };
  const decrementThreshhold = () => {
    setThreshhold(threshhold - 1);
  };

  const setThreshholdVal = (val) => {
    setThreshhold(+val);
  };
  return (
    <>
      <h2>Counter Component</h2>
      <h3>Count is : {count}</h3>
      <br />
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
      <br />
      <br />
      <h3>Threshhold: {threshhold}</h3>
      <button onClick={incrementThreshhold}>Increment Threshhold</button>
      <button onClick={decrementThreshhold}>Decrement Threshhold</button>

      <input
        type="text"
        value={threshhold}
        placeholder="input threshold manually..."
        onChange={(e) => setThreshholdVal(e.target.value)}
      />
    </>
  );
}
