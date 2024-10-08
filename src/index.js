import React from "react";
import ReactDOM from "react-dom";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------

const rootElement = document.querySelector("#root"); // Select the root element in the HTML

// Check if the root element exists; if not, throw an error
if (!rootElement) throw new Error("Failed to find the root h1");

// Render the MainContent component inside the root element, wrapped in StrictMode for highlighting potential problems
ReactDOM.render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>,
  rootElement
);
