import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Container } from "./Container";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
