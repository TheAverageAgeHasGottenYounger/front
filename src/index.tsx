import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  SignupProvider,
  AdminSignupProvider,
} from "./APP/common/SignupContext";

const container = document.getElementById("root");

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <AdminSignupProvider>
        <SignupProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SignupProvider>
      </AdminSignupProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root container not found");
}
