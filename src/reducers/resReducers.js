import {
  INIT_LOADING,
  GET_ALL_RES_GOOD,
  NEXTING,
  //VOTE_DOWN,
  //VOTE_UP,
}
from
'../actions/constant';

const initialState = {
  restaurants: [],
  initLoading: false,
  nexting: false,
  voteDown: false,
  voteUp: false
};

// init loading
export function initLoading(state = initialState, action) {
  switch (action.type) {
    case INIT_LOADING:
      return {
        ...state,
        initLoading: true
      }
    default:
      //
      return state;
  }
};

export function getAllResGood(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RES_GOOD:
      return {
        ...state,
        res: action.res
      }
    default:
      //
      return state;
  }
};

//
export function nexting(state = initialState, action) {
  switch (action.type) {
    case NEXTING:
      return {
        ...state,
        nexting: true
      }
    default:
      //
      return state;
  }
};
