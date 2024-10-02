import React from "react";
import ReactDOM from "react-dom";

import MainContent from "./Project-5/MainContent";
import "./Project-5/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root");

if (!rootElement) throw new Error("Failed to find the root h1");

ReactDOM.render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>,
  rootElement
);
