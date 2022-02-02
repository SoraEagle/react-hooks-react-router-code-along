import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

/*
BrowserRouter is wrapped around the topmost Component.
Because of this, it is also wrapped around all of its 
child Components too!
*/