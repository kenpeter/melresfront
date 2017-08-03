import {
  INIT_LOADING,
  GET_ALL_RES_GOOD,
  NEXTING,
  //VOTE_DOWN,
  //VOTE_UP
}
from
'../actions/constant';

const config = require('../config');

//
export function intLoading(bool) {
  //
  return {
    //
    type: INIT_LOADING,
    //
    initLoading: bool
  };
};

//
export function nexting(bool) {
  //
  return {
    //
    type: NEXTING,
    //
    nexting: bool
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

        // else not loading
        dispatch(intLoading(false));

        //console.log('-- res --');
        //console.log(response.json());

        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((res) => {
        //console.log('-- res --');
        //console.log(res);
        dispatch(getAllResGood(res));
      })
      .catch((err) => {
        console.log('-- fetch error --');
        console.log(err);
      });
    };
};


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

        // else not loading
        dispatch(intLoading(false));

        //console.log('-- res --');
        //console.log(response.json());

        return response;
      })
      .then((response) => response.json()) // now we get response
      .then((res) => {
        //console.log('-- res --');
        //console.log(res);
        dispatch(getAllResGood(res));
      })
      .catch((err) => {
        console.log('-- fetch error --');
        console.log(err);
      });
    };
};


export function voteUp() {
  console.log('vote up');
};
