import { AUTH_USER, FETCH_ERROR, FETCH_USER } from '../Actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
        return action.payload || false;
    case AUTH_USER:
      console.log(action.payload)
      return { ...state, authenticated: action.payload };
    case FETCH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}