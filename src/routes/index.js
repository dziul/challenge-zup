import React, { useMemo } from "react";
import { Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {Actions} from '../store/login';
import pageMetadata from '../pages/metadata';

import PrivateRoute from './PrivateRoute';
import Route from './Route';
import history from './history';

const Routes = ({actions}) => {

  useMemo(()=>{
    actions.authenticated();
  },[actions]);

  return (
    <ConnectedRouter history={history}>
          
        <Switch>
          <Route path={pageMetadata.home.path}
            component={pageMetadata.home.component()} exact
            title={pageMetadata.home.title}
          />
          <Route path={pageMetadata.signin.path}
            component={pageMetadata.signin.component()}
            title={pageMetadata.signin.title}
          />
          <Route path={pageMetadata.signup.path}
            component={pageMetadata.signup.component()}
            title={pageMetadata.signup.title}
          />
          <PrivateRoute path={pageMetadata.dashboard.path}
            component={pageMetadata.dashboard.component()}
            title={pageMetadata.dashboard.title}
          />
          <Route path={pageMetadata.nofound.path}
            component={pageMetadata.nofound.component()}
            title={pageMetadata.nofound.title}
          />
        </Switch>
      
    </ConnectedRouter>
  )
};

const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(null, mapDispatchToProps)(Routes);