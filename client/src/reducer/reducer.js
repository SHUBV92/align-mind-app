const defaultState = {
  currentUser: {},
};

function reducer(state = defaultState, action) {
  console.log("Reducer Payload", action.payload)
    switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
