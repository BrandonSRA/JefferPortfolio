import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GenerateTheme } from "./theme/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={GenerateTheme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
