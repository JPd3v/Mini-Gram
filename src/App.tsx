import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-red-600 bg-green-300 text-9xl underline">
        Vite + React
      </h1>
      <div className="card">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is
          {count}
        </button>
        <p>Edit and save est HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite andrn more</p>
    </div>
  );
}

export default App;
