import { takeLatest, put, call,all, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import firebase from '../../services/firebase';
import {TYPES} from './index';
import pageMetadata from '../../pages/metadata';

function* failure({message}){
  yield put({
    type: TYPES.FAILURE,
    payload: {
      message,
      type: 'error',
    }
  });
};


const selectState = {
  getUser(state){
    return state.loginReducer.user;
  },
  isAuthenticated(state){
    return state.loginReducer.authenticated;
  }
}

const collectionUser = () => firebase.firestore().collection('user');

const getDataUser = (id) => {
  return collectionUser().doc(id).get().then(doc=>{
    if(doc.exists) return doc.data();
    return {};
  });
};

const onAuthStateChangedPromise = () => {
  return new Promise((resolve, reject)=>{
    firebase.auth().onAuthStateChanged(user=>{
      if(user) resolve(user.uid);
      else resolve(false);
    });
  });
};

function* signUp(state){
  try{

    const {name, email, password} = state.payload;
    const response = yield firebase.auth().createUserWithEmailAndPassword(email, password);

    const user = {
      email,
      name,
      id : response.user.uid,
    };
    yield collectionUser().doc(user.id).set(user);
    
    yield put({
      type: TYPES.SIGN_UP,
      payload: {
        user,
        feedback: {
          message: 'Account successfully created',
          type: 'success',
        },
        authenticated: true,
      }
    });
    yield put(push(pageMetadata.dashboard.path)); //direcionar para N página
    
  }catch(error){
    yield call(failure, error);
  }

};

function*  signOut(){
    try{

      yield firebase.auth().signOut();

      yield put({
        type: TYPES.SIGN_OUT,
        payload: {
          user: {},
          authenticated: false,
        }
      });

      yield put(push(pageMetadata.home.path));// direciona para N página

    }catch(error){
      yield call(failure, error);
    }
};

function* signIn(state){
  try{
    const {email, password} = state.payload;
    let user = {};
    const response = yield firebase.auth().signInWithEmailAndPassword(email, password);
    if(response.user.uid) user = yield getDataUser(response.user.uid);

    yield put({ 
      type: TYPES.SIGN_IN,
      payload: {
        user,
        authenticated: !!response.user.uid,
      }
    });
    yield put(push(pageMetadata.dashboard.path)); //direcionar para N página

  }catch(error){
    yield call(failure, error);
  }
};

function* observableAuthState(){
    try{

      const userId = yield call(onAuthStateChangedPromise);
      let user = yield select(selectState.getUser);
      if(userId && !user.hasOwnProperty('email')) user = yield getDataUser(userId);

      yield put({
        type: TYPES.AUTHENTICATED,
        payload: {
          user,
          authenticated: !!userId,
        }
      });
      
    }catch(error){
      yield call(failure, error);
    }
};

function* authorizedItDoesRedirect(){
  let isAuth = yield select(selectState.isAuthenticated);
  if(isAuth){
    yield put(push(pageMetadata.dashboard.path));
  }
}

export default function* watchAll(){
    yield all([
        takeLatest(TYPES.SIGN_UP_REQUEST, signUp),
        takeLatest(TYPES.SIGN_OUT_REQUEST, signOut),
        takeLatest(TYPES.AUTHENTICATED_REQUEST, observableAuthState),
        takeLatest(TYPES.SIGN_IN_REQUEST, signIn),
        takeLatest(TYPES.AUTHORIZED_IT_DOES_REDIRECT, authorizedItDoesRedirect)
    ]);
};