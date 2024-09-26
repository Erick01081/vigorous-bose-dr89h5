import React from "react";
import ReactDOM from "react-dom";
import ArcadeMachine from "./components/ArcadeMachine";
import "./index.css";

function App() {
  return (
    <div className="app">
      <ArcadeMachine />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
