const characterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_CHARACTER':{
      const newState = action.character;
      return newState;
    }
    default:
      return state;
  };
};

export default characterReducer;
