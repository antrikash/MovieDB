export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
