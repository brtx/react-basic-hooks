import React, { useState, useEffect } from 'react';
import './App.css';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  useEffect(() => { document.title = `foo ${count}` });

  return [count, setCount];
}

function App() {
  const [count, setCount] = useCounter(1);
  const [anotherCount, setAnotherCount] = useCounter(23);

  return (
    <div className="App">
      <div>Count {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <div>Another Count {anotherCount}</div>
      <button onClick={() => setAnotherCount(anotherCount + 10)}>+1</button>
    </div>
  );
}

export default App;
