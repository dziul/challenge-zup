import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import pageMetadata from '../pages/metadata';

const PrivateRoute = ({component:Component, title, path, collection, ...rest}) => {
  
  useMemo(()=>{
      document.title = title
  },[title]);

  return(
    <Route {...rest}
      title={title}
      path={path}
      render={
          props => (
            collection.authenticated!==null &&
            (collection.authenticated ? 
            <Component {...props} /> :
            <Redirect to={{ path: pageMetadata.home.path, state: {from: props.location } }}/>)
          )
      }
    />
  )
};

const mapStateToProps = (state) => ({collection: state.loginReducer});
export default connect(mapStateToProps)(PrivateRoute);