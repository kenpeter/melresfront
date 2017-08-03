import {
  INIT_LOADING,
  GET_ALL_RES_GOOD,
  NEXTING,
  //VOTE_DOWN,
  //VOTE_UP
}
from
'../actions/constant';

/*
const initialState = {
  restaurants: [],
  initLoading: false,
  nexting: false,
  voteDown: false,
  voteUp: false
};
*/

// This is the listener + also use in component
// state matches individual attr
// action contains action.type, action.attr
export function initLoading(state = false, action) {
  switch (action.type) {
    case INIT_LOADING:
      return action.initLoading;
    default:
      //
      return state;
  }
};

export function getAllResGood(state = [], action) {
  switch (action.type) {
    case GET_ALL_RES_GOOD:
      return action.res.restaurants;
    default:
      //
      return state;
  }
};

//
export function nexting(state = false, action) {
  switch (action.type) {
    case NEXTING:
      return action.nexting;
    default:
      //
      return state;
  }
};
