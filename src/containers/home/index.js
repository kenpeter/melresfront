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
    let resDisplay = 'bla';
    if(
      typeof this.props.restaurants === 'undefined' ||
      this.props.restaurants.length === 0
    ) {
      // do nothing
    }
    else {
      const resDisplayFunc = () => {
        const res = this.props.restaurants;
        return (
          <div className="card" key={ res._id }>
            <div className="card-header">
              &nbsp;
            </div>
            <div className="card-block">
              <h4 className="card-title">bla</h4>
              <p className="card-text">bla</p>
              <a href='http://google.com' className="btn btn-primary">Go</a>
            </div>
          </div>
        );
      };

      resDisplay = resDisplayFunc();
    }

    // loading
    if (this.props.initLoading) {
      return <p>Loading....</p>;
    }

    return (
      <div>
        { resDisplay }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  //console.log(state);
  return {
    initLoading: state.initLoading,
    nexting: state.nexting,
    restaurants: state.getAllResGood
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
