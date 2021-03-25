// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const content = Array(100)
    .fill(1)
    .map((i, j) => j)
    .join("，");

  const [showText, updateData] = useState([]);

  function handle(index, list) {
    console.log("==", index, content.length / 30);
    setTimeout(() => {
      if (Math.ceil(content.length / 30) > index) {
        console.log("22", index, list);
        const newList = list.concat(content.substr(index * 30, 30));
        updateData(newList);
        handle(index + 1, newList);
      }
    }, 20);
  }

  function onClick() {
    handle(1, [content.substr(0, 30)]);
  }

  return (
    <div>
      <div onClick={onClick}>button</div>
      ------
      {content}
      ----
      {showText.map((i, j) => (
        <span key={j}>{i}</span>
      ))}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
