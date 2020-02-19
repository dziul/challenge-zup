import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loginReducer from './login';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    loginReducer,
});

export default rootReducer;