import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./views/";
import history from "./config/history";

const Routers = () => {
  
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routers;
