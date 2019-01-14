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
      <input
        value={this.state.searchText}
        onChange={this.onChange}
        type="text"
        className="search-box form-control fuzzy-search order-guide-search"
        placeholder="Search Live Lanes"
        autoFocus
      />
    );
  }
}

SearchBox.propTypes = {
  changeSearchText: PropTypes.func.isRequired
}