import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class SearchBox extends Component {
  state = {
    searchText: ''
  }

  onChange = (event) => {
    this.setState({searchText: event.target.value});
    this.props.changeSearchText(event.target.value);
  }

  render() {
    return (
      <div className="search-box">
        <span className="fa fa-search search-icon"></span>
        <input
          value={this.state.searchText}
          onChange={this.onChange}
          type="text"
          className="search-box-input"
          placeholder="Search Live Lanes"
          autoFocus
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  changeSearchText: PropTypes.func.isRequired
}