import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/LandingPage";
import Portfolio from "../pages/Portfolio";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/portfolio" component={Portfolio}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
