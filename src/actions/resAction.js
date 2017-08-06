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

const config = require('../config');

export function intLoading(bool) {
  //
  return {
    //
    type: INIT_LOADING,
    //
    initLoading: bool
  };
};

export function nexting(bool) {
  //
  return {
    //
    type: NEXTING,
    //
    nexting: bool
  };
};

export function votingUp(bool) {
  return {
    type: VOTING_UP,
    votingUp: bool
  };
};

export function votingDown(bool) {
  return {
    type: VOTING_DOWN,
    votingDown: bool
  };
};

export function voteUpCount(count) {
  return {
    type: VOTE_UP_COUNT,
    voteUpCount: count
  };
};

export function voteDownCount(count) {
  return {
    type: VOTE_DOWN_COUNT,
    voteDownCount: count
  };
};

export function getAllResGood(res) {
  return {
    type: GET_ALL_RES_GOOD,
    res
  };
};

//
export function getToken(url) {
  //
  return new Promise((resolve, reject) => {
    //
    const body = {
      username: config.backendUsername
    };

    //
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then((res) => {
      resolve(res.token);
    })
    .catch((err) => {
      console.log('-- getToken error!!!!!! --');
      console.log(err);

      reject(err);
    })
  });
};

export function getARestaurant() {
  //
  return async (dispatch) => {
    // it is loading
    dispatch(intLoading(true));

    const accessToken = await getToken(config.backendAuthUrl);
    const localUrl = config.backendRootUrl + `/api/restaurant?token=${accessToken}`;

    //
    sessionStorage.setItem('resToken', accessToken);

    fetch(localUrl)
      .then(response => {
        // not ok
        if (!response.ok) {
          if(response.status === 403) {
            // access denied, get token first
            console.log('-- 403, need to get token --');
            return;
          }

          // throw error
          console.log('throw error');
          throw Error(response.statusText);
        }

        dispatch(intLoading(false));
        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((res) => {
        dispatch(getAllResGood(res));
        // It is a single restaurant
        const currVoteUpCount = res.restaurants.voteUpCount;
        dispatch(voteUpCount(currVoteUpCount));
        const currVoteDownCount = res.restaurants.voteDownCount;
        dispatch(voteDownCount(currVoteDownCount));
      })
      .catch((err) => {
        console.log('-- fetch error --');
        console.log(err);
      });
    };
};

// Used on move next
export function getARestaurantWithToken() {
  //
  return async (dispatch) => {
    // it is loading
    dispatch(intLoading(true));

    //
    const accessToken = sessionStorage.getItem('resToken');
    const localUrl = config.backendRootUrl + `/api/restaurant?token=${accessToken}`;

    fetch(localUrl)
      .then(response => {
        // not ok
        if (!response.ok) {
          if(response.status === 403) {
            // access denied, get token first
            console.log('-- 403, need to get token --');
            return;
          }

          // throw error
          console.log('throw error');
          throw Error(response.statusText);
        }

        dispatch(intLoading(false));
        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((res) => {
        //console.log('-- res --');
        //console.log(res.restaurants);
        dispatch(getAllResGood(res));
        dispatch(voteUpCount(res.restaurants.voteUpCount));
        dispatch(voteDownCount(res.restaurants.voteDownCount));
      })
      .catch((err) => {
        console.log('-- fetch error --');
        console.log(err);
      });
    };
};

//
export function voteUp(resId, countNum) {
  //console.log('-- not working??? --');
  return (dispatch) => {
    //test
    //console.log('-- ready to work ? --');
    const accessToken = sessionStorage.getItem('resToken');
    const localUrl = config.backendRootUrl + `/api/voteUp?token=${accessToken}`;

    //test
    //console.log('-- dispatch vote up true --');
    dispatch(votingUp(true));

    const dataUri = `resId=${resId}&countNum=${countNum}`;
    //test
    //console.log('-- dataUri --');
    //console.log(dataUri);

    fetch(localUrl, {
      method: 'POST',
      // this line is important, if this content-type is not set it wont work
      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
      body: dataUri
    })
      .then(response => {
        if (!response.ok) {
          // throw error
          console.log('voteUp throw error');
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((json) => {
        dispatch(votingUp(false));
        //console.log('-- res voteupcount --');
        //console.log(json.newCount);
        dispatch(voteUpCount(json.newCount));
      })
      .catch((err) => {
        console.log('-- vote up error --');
        console.log(err);
      });
  };
};


//
export function voteDown(resId, countNum) {
  //console.log('-- not working??? --');
  return (dispatch) => {
    //test
    //console.log('-- ready to work ? --');
    const accessToken = sessionStorage.getItem('resToken');
    const localUrl = config.backendRootUrl + `/api/voteDown?token=${accessToken}`;

    //test
    //console.log('-- dispatch vote up true --');
    dispatch(votingDown(true));

    const dataUri = `resId=${resId}&countNum=${countNum}`;
    //test
    //console.log('-- dataUri --');
    //console.log(dataUri);

    fetch(localUrl, {
      method: 'POST',
      // this line is important, if this content-type is not set it wont work
      headers: { 'Content-Type':'application/x-www-form-urlencoded' },
      body: dataUri
    })
      .then(response => {
        if (!response.ok) {
          // throw error
          console.log('voteDown throw error');
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((json) => {
        dispatch(votingDown(false));
        //console.log('-- res voteupcount --');
        //console.log(json.newCount);
        dispatch(voteDownCount(json.newCount));
      })
      .catch((err) => {
        console.log('-- vote down error --');
        console.log(err);
      });
  };
};
