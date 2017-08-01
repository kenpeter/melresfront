// react
import React from 'react';
// push in naviate inside the store
//import { push } from 'react-router-redux';
// bind action creators is like dispatching
import { bindActionCreators } from 'redux';

// connect, normally conenct attributes and methods.
import { connect } from 'react-redux';

//
import {
  dumpaction
} from '../../modules/myaction';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>
      <button onClick={props.dumpaction}>dumpaction</button>
    </p>
  </div>
)

//
const mapStateToProps = state => ({

});

//
const mapDispatchToProps = dispatch => bindActionCreators({
  dumpaction
}, dispatch);

//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
