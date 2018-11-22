const initialState = null;

const ActiveBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_BOOK':
      return action.payload;
      break;
    default:
      break;
  }
  return state;
};

export default ActiveBookReducer;
