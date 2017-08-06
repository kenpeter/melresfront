// react
import React, { Component } from 'react';
// connect, normally conenct attributes and methods.
import { connect } from 'react-redux';

//
import {
  getARestaurant,
  getARestaurantWithToken,
  voteUp,
  voteDown
} from '../../actions/resAction';

class Home extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let resDisplay = 'Display nothing';
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

              <button
                onClick={ this.props.moveNext }
                type="button"
                className="btn btn-primary btn-lg btn-block">
                Next
              </button>

              <button
                disabled={ this.props.votingUp }
                onClick={ () => this.props.voteUp(res._id, 1) }
                type="button"
                className="btn btn-success btn-lg btn-block">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i> ({ this.props.voteUpCount })
              </button>

              <button
                disabled={ this.props.votingDown }
                onClick={ () => this.props.voteDown(res._id, 1) }
                type="button"
                className="btn btn-danger btn-lg btn-block">
                <i className="fa fa-thumbs-down" aria-hidden="true"></i> ({ this.props.voteDownCount })
              </button>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted">
                <a rel="noopener noreferrer" href="https://au.linkedin.com/in/thegaryliang" target="_blank">Hire me</a>
                &nbsp;|&nbsp;
                <a rel="noopener noreferrer" href="https://github.com/kenpeter/melresfront" target="_blank">Source</a>
              </small>
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
  return {
    initLoading: state.initLoading,
    nexting: state.nexting,
    restaurants: state.getAllResGood,
    votingUp: state.votingUp,

    voteUpCount: state.voteUpCount,
    voteDownCount: state.voteDownCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveNext: () => {
      dispatch(getARestaurantWithToken());
    },

    voteUp: (resId, countNum) => {
      dispatch(voteUp(resId, countNum));
    },

    voteDown: (resId, countNum) => {
      dispatch(voteDown(resId, countNum));
    },

    fetchData: () => {
      dispatch(getARestaurant());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
