import "./App.css";
import React from "react";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import detailPage from "./views/DetailPage";
import formPage from "./views/FormPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/detail/:id" component={detailPage} />
          <Route path="/form" component={formPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
