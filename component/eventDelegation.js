import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    const btn = document.createElement("button");
    btn.innerHTML = count;
    setCount(count + 1);
    console.log(e.target);

    e.target.parentNode.appendChild(btn);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div onClick={(e) => handleClick(e)}>
        <button>{count}</button>
      </div>
    </div>
  );
}
