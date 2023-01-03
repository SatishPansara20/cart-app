import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import { store } from "./Redux/store";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { AuthContextProvider } from "./context/AuthContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <ErrorBoundary>
                <AuthContextProvider>
                  <Provider store={store}>
                    {/* <ApiProvider api={productAPI}>  </ApiProvider> */}
                    <App />
                  </Provider>
                </AuthContextProvider>
              </ErrorBoundary>{" "}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
