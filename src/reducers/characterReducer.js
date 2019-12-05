const characterReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':{
      const newState = [...action.characters];
      return newState;
    }
    default:
      return state;
  };
};

export default characterReducer;
