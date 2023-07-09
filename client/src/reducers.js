const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};

export default reducer;
