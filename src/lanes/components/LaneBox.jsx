import React from 'react';
import PropTypes from 'prop-types';

const LaneBox = ({lane}) => (
  <div className="lane-box">
    <div><span className="lane-name">{lane.lane}</span><span className="auction"> - {lane.auction}</span></div>
    <div className="year-make-model">{lane.year} {lane.make} {lane.model} is live</div>
    <div className="items-remaining">{lane.itemsRemaining} items remaining</div>
  </div>
);

LaneBox.propTypes = {
  lane: PropTypes.object.isRequired
}

export default LaneBox;