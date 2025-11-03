import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./routes/Router";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <Router />
      </ThemeContextProvider>
    </BrowserRouter>
  </StrictMode>
);
