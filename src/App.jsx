import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const ofaLogo = "https://ofajs.github.io/ofa-v4-docs/docs/publics/logo.svg";
  return (
    <>
      <l-m src="https://ofajs.github.io/ofa-v4-docs/docs/publics/comps/punch-logo.html"></l-m>
      <punch-logo>
        <img
          src={ofaLogo}
          height="90"
        />
        <h2>Use ofa.js In React</h2>
        <p slot="fly">npm</p>
        <p slot="fly">webpack</p>
        <p slot="fly">nodejs</p>
      </punch-logo>
      <div>
        <a href="https://ofajs.com/cn/index.html" target="_blank" rel="noreferrer">
          <img src={ofaLogo} className="logo" alt="ofa.js logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ofa.js + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the ofa.js and React logos to learn more
      </p>
    </>
  );
}

export default App;
