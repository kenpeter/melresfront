// combine reducers
import { combineReducers } from 'redux';

// we want to store router state inside store
// we have to user routerReducer, together with other reducer
import { routerReducer } from 'react-router-redux';

// we can jam more reducers into the combined reducers.
import myaction from './myaction';

// export combined reducers
// does it mean routerReducers + other reducers.
export default combineReducers({
  router: routerReducer,
  myaction
})
