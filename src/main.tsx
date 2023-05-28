import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/globalStyle.ts";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
