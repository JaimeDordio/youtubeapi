import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App.jsx";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

// axios.interceptors.request.use(function (config) {
//   console.log(config);
// });

// axios.interceptors.response.use(function (response) {
//   console.log(response);
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
