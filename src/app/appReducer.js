import { combineReducers } from 'redux';

import lanesReducer from '../lanes/lanesReducer'

const AppReducer = combineReducers({
  lanesReducer
})

export default AppReducer;