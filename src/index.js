import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals.js";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <App />
 </React.StrictMode>
);

reportWebVitals();
