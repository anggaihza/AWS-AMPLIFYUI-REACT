import React from "react";
import { createRoot } from "react-dom/client"; // New import for React 18
import "./index.css";
import App from "./App";
import ThemeProvider from "./ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container); // Use createRoot instead of ReactDOM.render

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
