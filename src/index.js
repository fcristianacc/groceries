import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Login from "./components/login/login.js";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
