import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>テンプレートタイトル</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
