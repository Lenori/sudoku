import React from "react";

import { BrowserRouter } from "react-router-dom";

import RouteManager from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <RouteManager />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
