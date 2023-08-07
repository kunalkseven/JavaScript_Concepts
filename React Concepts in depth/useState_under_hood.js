// How useState work internally 
// useState polyfills.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

let callIndex = -1;

const stateValues = [];

const useState = (initialValue) => {
  callIndex++;
  const currentCallIndex = Number(callIndex);

  if (stateValues[currentCallIndex] === undefined) {
    stateValues[currentCallIndex] = initialValue;
  }

  const setValue = (newValue) => {
    stateValues[currentCallIndex] = newValue;
    renderApp();
  };

  return [stateValues[currentCallIndex], setValue];
};

function App() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(-10);
  return (
    <div className="App">
      <div>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <h3>Count1: {count1}</h3>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
      </div>
      <br />
      <div>
        <button onClick={() => setCount2(count2 + 10)}>+</button>
        <h3>Count1: {count2}</h3>
        <button onClick={() => setCount2(count2 - 10)}>-</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function renderApp() {
  callIndex = -1;
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
renderApp();
