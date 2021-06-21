const reducer = (state, action) => {
  let incomingState;
  let newState;
  switch (action.type) {
    case 'UPDATE':
      incomingState = action.payload;
      newState = { ...state, ...incomingState };
      return newState;
    default:
      return state;
  }
};

export default reducer;
