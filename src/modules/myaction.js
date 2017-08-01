export const INIT_LOADING = 'INIT_LOADING';
export const INIT_LOADING_DONE = 'INIT_LOADING_DONE';
export const NEXTING = 'NEXTING';
export const NEXTING_DONE = 'NEXTING_DONE';

export const VOTE_DOWN = 'VOTE_DOWN';
export const VOTE_UP = 'VOTE_UP';

// state of this app
const initialState = {
  restaurants: [],
  initLoading: false,
  nexting: false,
  voteDown: false,
  voteUp: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    // loading
    case INIT_LOADING:
      return {
        ...state,
        initLoading: true
      }

    // loading done
    case INIT_LOADING_DONE:
      return {
        ...state,
        initLoading: false
      }

    case NEXTING:
      //test
      //console.log('nexting');
      return {
        ...state,
        nexting: true
    }

    case NEXTING_DONE:
      //test
      //console.log('nexting_done');
      return {
        ...state,
        nexting: false
    }

    case VOTE_UP:
      return {
        ...state
      }

    case VOTE_DOWN:
      return {
        ...state
    }

    default:
      return state;
  }
}


export const dumpaction = () => {
  return dispatch => {
    dispatch({
      type: NEXTING
    })

    dispatch({
      type: NEXTING_DONE
    })
  }
}
