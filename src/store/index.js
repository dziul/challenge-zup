import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from '../routes/history';

import Sagas from './sagas';
import Reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
];

const store = createStore(Reducers(history), compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(Sagas);

export default store;