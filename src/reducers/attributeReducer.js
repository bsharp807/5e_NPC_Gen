const attributeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ATTRIBUTES':{
      const newState = {...action.attributes};
      return newState;
    }
    default:
      return state;
  };
};

export default attributeReducer;
