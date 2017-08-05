// combine reducers
import { combineReducers } from 'redux';

// We need to register app's attributes.
import {
  initLoading,
  getAllResGood,
  nexting,
  votingUp,

  votingDown,
  voteUpCount
} from './resReducers';

// export combined reducers
// does it mean routerReducers + other reducers.
export default combineReducers({
  initLoading,
  getAllResGood,
  nexting,
  votingUp,

  votingDown,
  voteUpCount
});
