import React from 'react';
import SearchBar from 'react-native-searchbar';

const SearchTool = (props) => (
  <SearchBar
    ref={(ref) => (this.searchBar = ref)}
    data={props.movie}
    handleResults={props.movie}
    showOnLoad
  />
);

export default SearchTool;
