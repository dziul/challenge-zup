/**
 * My Duck pattern alternative
 */

export const TYPES = {
  
  SIGN_UP: "login/SIGN_UP",
  SIGN_UP_REQUEST: "login/SIGN_UP_REQUEST",
  SIGN_OUT: "login/SIGN_OUT",
  SIGN_OUT_REQUEST: "login/SIGN_OUT_REQUEST",
  SIGN_IN: "login/SIGN_IN",
  SIGN_IN_REQUEST: "login/SIGN_IN_REQUEST",
  AUTHENTICATED: "login/AUTHENTICATED",
  AUTHENTICATED_REQUEST: "login/AUTHENTICATED_REQUEST",
  AUTHORIZED_IT_DOES_REDIRECT: "login/AUTHORIZED_IT_DOES_REDIRECT",
  FAILURE: "login/FAILURE",
  
};

export const Actions = {
  signUp(user){
    return {
      type: TYPES.SIGN_UP_REQUEST,
      payload: user
    }
  },
  signIn(user){
    return {
      type: TYPES.SIGN_IN_REQUEST,
      payload: user
    }
  },
  signOut(){
    return {
      type: TYPES.SIGN_OUT_REQUEST,
      payload: {}
    }
  },
  authenticated(){
    return {
      type: TYPES.AUTHENTICATED_REQUEST,
      payload: {}
    }
  },
  authorizedItDoesRedirect(){
    return {
      type: TYPES.AUTHORIZED_IT_DOES_REDIRECT,
      payload: {}
    }
  }
};

const StateInitial = {
    authenticated: null,
    user : {}, // email, name, id, 
    loading: false,
    error: false,
    feedback: {
      type: '',
      message: '',
    }
};

const reducer = (state = StateInitial, action) => {
  switch (action.type) {
    case TYPES.SIGN_UP:
    case TYPES.SIGN_IN:
    case TYPES.SIGN_OUT:
    case TYPES.AUTHENTICATED:
      return {
        ...state,
        ...action.payload,
        loading:false,
        error:false
      };
    
    case TYPES.AUTHENTICATED_REQUEST:
    case TYPES.SIGN_IN_REQUEST:
    case TYPES.SIGN_OUT_REQUEST:
    case TYPES.SIGN_UP_REQUEST:
      return {...state, loading:true,error:false, feedback:{type:'',message:''}};

    case TYPES.FAILURE:
      return {
        ...state,
        loading:false,
        error:true,
        feedback: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
