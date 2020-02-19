import React, {useState, useEffect} from "react";
import Routes from "./routes";

import { connect } from 'react-redux';

import Alert from './components/Alert';
import LinearProgress from './components/LinearProgress';

import GlobalStyled from "./styleds/GlobalStyled";

function App({collection}) {
  const [alertOpen, alertOpenSet] = useState(false);
  const [alertMessage, alertMessageSet] = useState('');
  const [alertType, alertTypeSet] = useState('');
  const [loading, loadingSet] = useState('');

  useEffect(()=>{
    alertOpenSet(collection.feedback.type.length > 0 && !collection.loading);
    alertMessageSet(collection.feedback.message);
    alertTypeSet(collection.feedback.type);
    loadingSet(collection.loading);
  }, [collection]);

  return (
    <>
      {loading && <LinearProgress/>}
      <Alert
        visible={alertOpen}
        message={alertMessage}
        type={alertType}
      />
      <Routes />
      <GlobalStyled />
    </>
  );
};

const mapStateToProps = (state) => ({collection: state.loginReducer});
export default connect(mapStateToProps)(App);
