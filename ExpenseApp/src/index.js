import ReactDOM from "react-dom/client";
//Importing a ReactDOM object from the reactDom 3rd party library into index.js
import React from "react";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
//createRoot creates the main entrypoint of the overall UI we're about to build.
//div is the most common to reference
//document.get.... is an app component that we render(also not regular js, it's JSX)
