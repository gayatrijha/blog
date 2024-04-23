import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 10 }, () => "WORD");
  return (
    <>
      <ul>
        {words.map((word, i) => (
          <li key={i}>
            {i}: {word}
          </li>
        ))}
      </ul>
      <Test />
    </>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
      {/* <SlowComponent /> */}
    </div>
  );
}
export default function Test() {
  return (
    <div>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
