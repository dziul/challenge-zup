import React, { useMemo } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PrivateRoute from './privateRoute';
import {Actions} from '../store/login';

import history from './history';
import pageMetadata from '../pages/metadata';


const Routes = ({actions}) => {

  useMemo(()=>{
    actions.authenticated();
  },[actions]);

  return (
    <ConnectedRouter history={history}>
          
        <Switch>
          <Route exact path={pageMetadata.home.path} component={pageMetadata.home.component()} />
          <Route path={pageMetadata.signin.path} component={pageMetadata.signin.component()} />
          <Route path={pageMetadata.signup.path} component={pageMetadata.signup.component()} />
          <PrivateRoute path={pageMetadata.dashboard.path} component={pageMetadata.dashboard.component()} />
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      
    </ConnectedRouter>
  )
};

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(null, mapDispatchToProps)(Routes);