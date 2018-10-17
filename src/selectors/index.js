export const getUser = state => (state && state.user) || {};
export const loggedIn = state => (state && state.loggedIn) || false;

export const getInputValue = (state, inputName) => (state.inputValue && state.inputValue.find(input => input && input.id === inputName).value) || 'undefined';
