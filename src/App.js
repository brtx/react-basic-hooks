import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <div>Count {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default App;
