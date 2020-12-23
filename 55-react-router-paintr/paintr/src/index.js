import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'

// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
// registerServiceWorker();
