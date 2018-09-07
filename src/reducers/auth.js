export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        displayName: action.displayName,
        anyUser: true
      };
    case 'LOGOUT':
      return {
        anyUser: false
      };
    default:
      return state;
  }
};
