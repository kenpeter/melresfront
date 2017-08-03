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
  getARestaurant,
  getARestaurantWithToken,
  voteUp
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
        //console.log(res);
        return (
          <div className="card" key={ res._id }>
            <div className="card-header text-center">
              Restaurant Rotator
            </div>
            <div className="card-block text-center">
              <h4 className="card-title">{ res.name }</h4>
              <a href={ res.url } target="_blank">
                <img src={ res.thumbUrl } width='250' height='250' alt="img"/>
              </a>
              <p className="card-text">Average cost for 2: ${ res.averageCostForTwo }</p>
              <p className="card-text">{ res.address }, <a target="_blank" href={ res.menuUrl }>Menu</a></p>

              <button onClick={ this.props.moveNext } type="button" className="btn btn-primary btn-lg btn-block">Next</button>
              <button disabled={ this.props.votingUp } onClick={ this.props.voteUp } type="button" className="btn btn-success btn-lg btn-block">Up (12)</button>
              <button onClick={ this.props.voteDown } type="button" className="btn btn-danger btn-lg btn-block">Down (4)</button>
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
    restaurants: state.getAllResGood,
    votingUp: state.votingUp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveNext: () => {
      dispatch(getARestaurantWithToken());
    },

    voteUp: () => {
      dispatch(voteUp());
    },

    voteDown: () => {

    },

    fetchData: () => {
      dispatch(getARestaurant());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
