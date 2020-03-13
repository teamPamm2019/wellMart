import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    location: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.loadDoctors();
  }
  loadDoctors = () => {

    API.getDoctor()
      .then(res => this.setState({location: res.data, name:"", street:"", city:"", state:"", zip:"", phone: ""}))
      .catch(err => console.log(err));
  }

 handleInputChange = event=> {
    this.setState({ search: event.target.value });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    API.getDoctor(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.location);
        }
        this.setState({ results: res.data.location, error: "" });
      })
      .catch(err => this.setState({ error: err.location}));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "20%" }}>
          <h4 className="text-center">Search for Doctor</h4>
         
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
};

export default Search;