import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  useEffect(() => { document.title = `foo ${count}` });

  return (
    <div className="App">
      <div>Count {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default App;
