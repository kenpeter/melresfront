// R
import React from 'react';
// display dowm
import { render } from 'react-dom';
// provider allows childrent component accesses this.context
import { Provider } from 'react-redux';

// router that connect react router, redux
import { ConnectedRouter } from 'react-router-redux';

// history is from createHistory locally.
// store is from createStore locally.
import store, { history } from './store/store';

// the main application
import App from './containers/app';

// reset css
import 'sanitize.css/sanitize.css';
// my css
import './index.css';

// #root tag
const target = document.querySelector('#root');

// provider jams redux store, history, app, router, the #root tag
// <div id="root"></div>
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
