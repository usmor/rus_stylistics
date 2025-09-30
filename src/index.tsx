import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/font.css";

import App from "./components/app/app";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router
        basename={process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : "/"}
      >
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
