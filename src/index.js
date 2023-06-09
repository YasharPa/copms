import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationPRovider } from "./context/navigation";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <NavigationPRovider>
    <App />
  </NavigationPRovider>
);
