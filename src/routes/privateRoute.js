import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import pageMetadata from '../pages/metadata';

const PrivateRoute = ({component:Component, collection, ...rest}) => {


    return (
      <>

      <Route
        {...rest}
        render={
            props => (
              collection.authenticated!==null &&
              (collection.authenticated ? 
              <Component {...props} /> :
              <Redirect to={{ path: pageMetadata.home.path, state: {from: props.location } }}/>)
            )
        }
      />
    
      </>
    );
};

const mapStateToProps = (state) => ({collection: state.loginReducer});

export default withRouter(connect(mapStateToProps)(PrivateRoute));