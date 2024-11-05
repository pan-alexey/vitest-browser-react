import { useState } from "react";

export const Counter = ({ initialCount = 0 }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div>Count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
