// store
// mid app
// combine
import { createStore, applyMiddleware, compose } from 'redux';
// mid app router for react router + redux
import { routerMiddleware } from 'react-router-redux';
// async
import thunk from 'redux-thunk';
// browser history
import createHistory from 'history/createBrowserHistory';
// the modules has routerReducer + other reducers.
// Now allReducers all passed into store
import rootReducer from '../reducers';

// we need to export browser history.
export const history = createHistory();

// app init state
const initialState = {};
// what is enhancers? e.g. array of dev tools, other tools.
const enhancers = [];
// now array of middle ware
const middleware = [
  // async
  thunk,
  // redux-router with history
  routerMiddleware(history)
]

// if dev
if (process.env.NODE_ENV === 'development') {
  // we append dev tool to windows obj
  const devToolsExtension = window.devToolsExtension

  // if dev tool is func
  if (typeof devToolsExtension === 'function') {
    // enhancer will have this func
    enhancers.push(devToolsExtension());
  }
}

//
const composedEnhancers = compose(
  // applyMiddleware(thunk, routerMiddleware(history))
  // apply middle ware returns a function
  // this function is to make the store better. Hence it is called enhancer.
  //
  // ... spread attribute and value
  applyMiddleware(...middleware),
  // dev tools
  ...enhancers
)

// store == reducer + state + enchancer
const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

// now most importantly, export the store
export default store;
