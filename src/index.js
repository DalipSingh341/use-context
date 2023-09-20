import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScreenFixedProvider from "./components/ContextObj";
// import dataSecondProvider from "./components/DataSecond";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScreenFixedProvider>
        <App />
      </ScreenFixedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
