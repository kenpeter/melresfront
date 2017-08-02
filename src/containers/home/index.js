// react
import React, { Component } from 'react';
// push in naviate inside the store
//import { push } from 'react-router-redux';
// bind action creators is like dispatching
import { } from 'redux';

// connect, normally conenct attributes and methods.
import { connect } from 'react-redux';

//
import {
  getARestaurant
} from '../../actions/resAction';

class Home extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    // loading
    if (this.props.initLoading) {
      return <p>Loading....</p>;
    }

    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(getARestaurant());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
