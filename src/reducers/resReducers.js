import {
  INIT_LOADING,
  GET_ALL_RES_GOOD,
  NEXTING,
  VOTING_DOWN,

  VOTING_UP,
  VOTE_UP_COUNT,
  VOTE_DOWN_COUNT
}
from
'../actions/constant';

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

export function nexting(state = false, action) {
  switch (action.type) {
    case NEXTING:
      return action.nexting;
    default:
      //
      return state;
  }
};

export function votingUp(state = false, action) {
  switch (action.type) {
    case VOTING_UP:
      return action.votingUp;
    default:
      //
      return state;
  }
};

export function votingDown(state = false, action) {
  switch (action.type) {
    case VOTING_DOWN:
      return action.votingDown;
    default:
      //
      return state;
  }
};

export function voteUpCount(state = 0, action) {
  switch (action.type) {
    case VOTE_UP_COUNT:
      //test
      //console.log('-- reducer --');
      //console.log(action);
      return action.voteUpCount;
    default:
      //
      return state;
  }
};

export function voteDownCount(state = 0, action) {
  switch (action.type) {
    case VOTE_DOWN_COUNT:
      //test
      //console.log('-- reducer --');
      //console.log(action);
      return action.voteDownCount;
    default:
      //
      return state;
  }
};
