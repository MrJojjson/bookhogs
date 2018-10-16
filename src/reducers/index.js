import { combineReducers } from 'redux';

const INITIAL_STATE = {
  text: 'HEJ'
};

const store = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  store
});