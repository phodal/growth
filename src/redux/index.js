import { combineReducers } from 'redux';
import routes from './routes/reducer';
import sectionRoutes from './section/reducer';
// ... other reducers

export default combineReducers({
  routes,
  sectionRoutes,
  // ... other reducers
});
