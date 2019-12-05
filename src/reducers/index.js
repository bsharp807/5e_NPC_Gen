import { combineReducers } from 'redux';

import characterReducer from './characterReducer';
import attributeReducer from './attributeReducer';

export default combineReducers({
  characters: characterReducer,
  attributes: attributeReducer
});
