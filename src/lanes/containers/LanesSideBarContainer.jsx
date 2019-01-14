import React, { Component } 	from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as LanesActions from '../lanesActions'
import LanesSideBarMain from '../components/LanesSideBarMain.jsx'
import '../styles/lanes.scss'

class LanesSideBarContainer extends Component {
  componentDidMount() {
    this.props.lanesActions.fetchLanes();
  }
  
  setLanesFilter = (filter) => {
    this.props.lanesActions.setLanesFilter(filter);
  }

  changeSearchText = (searchText) => {
    this.props.lanesActions.changeSearchText(searchText);
  }

  render() {
    return(
      <LanesSideBarMain
        {...this.props}
        setLanesFilter={this.setLanesFilter}
        changeSearchText={this.changeSearchText}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  const {lanes, searchText, filter} = state.lanesReducer;
  // Implemented an extremely simple search for lanes here.
    return {
      lanes: lanes.filter(lane => `${lane.year} ${lane.make} ${lane.model} ${lane.lane} ${lane.auction}`.toLowerCase().includes(searchText)),
      searchText,
      filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    lanesActions: bindActionCreators(LanesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanesSideBarContainer);
