import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import WatchesPage from "../Watches/watchesPage.jsx";
import IphonePage from "../Iphones/iPhonePage.jsx";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/watches">
        <WatchesPage />
      </Route>
      <Route path="/iphones">
        <IphonePage />
      </Route>
    </Switch>
  </Router>
);
export default App;
