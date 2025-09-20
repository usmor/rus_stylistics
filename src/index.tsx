import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/font.css";

import App from "./components/app/app";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : "/"}>
      <App />
    </Router>
  </React.StrictMode>,
);
