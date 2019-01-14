import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class LanesFilter extends Component {
  state = {
    filter: ''
  }

  setLanesFilter = (filter) => {
    this.props.setLanesFilter(filter);
  }

  render() {
    const {lanes, filter} = this.props;
      
    // This returns a box with count of lanes in this filter
    const displayCount = (filter, color) => {
      const style = {backgroundColor: color, border: `1px solid ${color}`}
      const count = lanes.filter(lane => lane[filter]).reduce(prev => prev + 1 , 0);

      // only return counts bigger than 0
      return count > 0 
        ? <span className="colour-box" style={style}>{count}</span> 
        : '';
    }

    // Highlight the selected style
    const selecedStyle = (currentFilter) => filter === currentFilter 
      ? {color: '#24292E', borderBottom: '1px solid #24292E'} : {};

    return(
      <div className="lanes-filter">
        <div style={selecedStyle('all')} onClick={() => this.setLanesFilter('all')}>
          ALL
        </div>
        <div style={selecedStyle('isOutbid')} onClick={() => this.setLanesFilter('isOutbid')}>
          OUTBID {displayCount('isOutbid', '#E76F67')}
         </div>
         <div style={selecedStyle('isWatching')} onClick={() => this.setLanesFilter('isWatching')}>
           WATCHING {displayCount('isWatching', 'blue')}
         </div>
         <div style={selecedStyle('isWinning')} onClick={() => this.setLanesFilter('isWinning')}>
           WINNING {displayCount('isWinning', '#1ABB9A')}
         </div>
      </div>
    );
  }
}

LanesFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  lanes: PropTypes.array.isRequired,
  setLanesFilter: PropTypes.func.isRequired
}
