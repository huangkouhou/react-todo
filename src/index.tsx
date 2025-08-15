import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {App} from "./components/App";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root not found");

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

