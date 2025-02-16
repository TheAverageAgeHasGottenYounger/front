import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SignupProvider } from "./APP/common/SignupContext";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <SignupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SignupProvider>
  </React.StrictMode>
);
