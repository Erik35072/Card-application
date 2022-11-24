import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App";
import { ThemeProvider } from "@mui/material";
// styles
import "./index.css";
// source
import Theme from "./providers/mui";
// redux
import { Provider } from "react-redux";
import { persistor, store } from "./providers/redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
