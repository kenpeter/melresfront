// combine reducers
import { combineReducers } from 'redux';

// we can jam more reducers into the combined reducers.
import {
  initLoading,
  getAllResGood,
  nexting
} from './resReducers';

// export combined reducers
// does it mean routerReducers + other reducers.
export default combineReducers({
  initLoading,
  getAllResGood,
  nexting
});
