import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

  render() {
    return (
      <div>
        <br></br>
        <img src="https://wellnesspractices.blazonco.com/images/news1.jpg"></img>
      </div>
    );
  }
}

export default Search;
