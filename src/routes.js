import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home.js";
import Login from "./components/login/login.js";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
