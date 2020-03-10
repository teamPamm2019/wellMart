import React, { Component } from "react";
import { render } from "react-dom";
import SearchCard from "../components/SearchCard";

const Search = () => (
  <div>
    <SearchCard />
  </div>
);

render(<Search />, document.getElementById("root"));

export default Search;
