import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import attributeReducer from './attributeReducer';
import selectedReducer from './selectedReducer';

export default combineReducers({
  characters: characterReducer,
  attributes: attributeReducer,
  selected: selectedReducer
});
