import { combineReducers } from 'redux';
import routes from './routes/reducer';
import sections from './section/reducer';

const appReducer = combineReducers({
  routes,
  sections,
  // ... other reducers
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
