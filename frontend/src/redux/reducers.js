import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from '../screens/auth/redux/reducers';

const topReducer = combineReducers({
  routing: routerReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'SIGNOUT') {
    localStorage.removeItem('persist:root');
    state = undefined;
  }
  return topReducer(state, action);
};

export default rootReducer;
