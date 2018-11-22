import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { query: ''};
  }
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search for your video"
          value={this.state.query}
          onChange={this.onChange} />
      </div>
    );
  }
 onChange = (event) => {
    this.setState({query:event.target.value});
    this.props.videoSearch(event.target.value);
 }
}

export default SearchBar;