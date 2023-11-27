import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increaseClick() {
    setCount(count + incrementBy);
  }
  function decrementClick() {
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1> Count value is :{count} </h1>
      <button onClick={increaseClick}>Increase count</button>
      <button onClick={decrementClick}>Decrease count</button>

      <h1>We are incrementing valu by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
