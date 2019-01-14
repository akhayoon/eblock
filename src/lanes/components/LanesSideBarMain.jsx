import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox.jsx';
import LanesFilter from './LanesFilter.jsx'
import LaneBox from './LaneBox.jsx';

export default class LanesSideBarMain extends Component {
  state = {
    filter: ''
  }

	render() {
    const {lanes, filter, changeSearchText, setLanesFilter} = this.props;

    return(
      <div className="lanes-sidebar-main">
        <div>
          <SearchBox changeSearchText={changeSearchText}/>
        </div>
          
        <LanesFilter
          filter={filter}
          lanes={lanes}
          setLanesFilter={setLanesFilter}
        />

        {/* Only filter lane results that are not 'all' */}
        <div className="lanes-list">
          {filter !== 'all'
            ? 
              <div>
                {lanes.filter(lane => lane[filter]).map((lane, index) => 
                  <LaneBox key={index} lane={lane} />
                )}
              </div>
            :
              <div>
                {lanes.map((lane, index) => 
                  <LaneBox key={index} lane={lane} />
                )}
              </div>
          }
        </div>
      </div>
		);
	}
}

LanesSideBarMain.propTypes = {
  lanes: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  setLanesFilter: PropTypes.func.isRequired,
  changeSearchText: PropTypes.func.isRequired
}