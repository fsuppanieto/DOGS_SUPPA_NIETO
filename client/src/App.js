import "./App.css";
import React from "react";
import LandingPage from "./views/LandingPage";
import HomePage from "./views/HomePage";
import Detail from "./views/DetailPage";
import FormPage from "./views/FormPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/form" component={FormPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
