import React from "react";
import ReactDOM from "react-dom/client";
import AgentMain from "./Agenetmain";
import App from "./App";
import Onboarding from "./Onboarding";
import Welcome from "./Welcome";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AgentMain />
  </React.StrictMode>
);
