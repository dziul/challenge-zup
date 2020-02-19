import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import pageMetadata from './pages/metadata';

const Routes = () => {
  return (  
    <BrowserRouter>
      <Switch>
        <Route exact path={pageMetadata.home.path} component={pageMetadata.home.component()} />
        <Route path={pageMetadata.signin.path} component={pageMetadata.signin.component()} />
        <Route path={pageMetadata.signup.path} component={pageMetadata.signup.component()} />
        <Route path={pageMetadata.dashboard.path} component={pageMetadata.dashboard.component} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;