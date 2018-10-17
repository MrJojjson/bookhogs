export const SET_USER = 'SET_USER';

export const setUser = (user) => async dispatch => {
  if (user) {
    dispatch({
      type: SET_USER,
      payload: user,
      status: 'complete'
    })
  } else {
    dispatch({
      type: SET_USER,
      payload: user,
      status: 'pending'
    })
  }
};