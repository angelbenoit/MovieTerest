import { FETCH_USER, FETCH_ERROR } from '../Actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload)
      return { ...state, authenticated: action.payload };
    case FETCH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}