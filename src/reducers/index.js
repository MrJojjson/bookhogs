import { combineReducers } from 'redux';

import {
  SET_USER,
} from '../actions';

const INITIAL_STATE = {
  user: {}
};

const store = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
    console.log('action', action);
    return {
      ...state,
      status: action.status,
      user: action.payload,
      loggedIn: action.payload && action.payload.uid
    };
    default:
      return state
  }
};

export default combineReducers({
  store
});