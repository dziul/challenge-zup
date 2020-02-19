import { all, fork } from 'redux-saga/effects';

import loginSaga from './login/saga';

export default function* rootWatchAll() {
    yield all([
        fork(loginSaga)
    ])
};