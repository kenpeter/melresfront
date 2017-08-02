// react
import React from 'react';
// we need route and link
import { Route } from 'react-router-dom';
import Home from '../home';

// const app
// fat arrow func
// we have Link, like hyper link
// route is to render something, exact path
// link to home
// link to about us
// main we have to render component. route exact path /, component={Home}
// route exact path, /aoubt-us, component={}
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
    </main>
  </div>
)

export default App;
