import React from "react";

const Search = props => {
  return (
    <div>
      <img src={require("../images/search.svg")} alt="search-icon" />
      <input placeholder="SEARCH..." />
    </div>
  );
};

export default Search;
