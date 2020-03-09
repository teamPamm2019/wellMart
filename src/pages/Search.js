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

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <div class="container">
        <div class="row">
            <div class="col s4">
              <select id='op1'>
                  <option value="" disabled selected>Specialties</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="OB/GYN">OB/GYN</option>
                  <option value="Internal Medicine">Internal Medicine</option>
                  <option value="Family Medicine">Family Medicine</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Neurologist">Neurologist</option>
              </select>
            </div>
            <div class="col s1"></div>
            <div class="col s7">
              <form>
                <span>Zip Code: <input id="to-do" type="text" class="form-control" name="fullName" value=" "></input></span>
                <span><input id="add-to-do" class="btn waves-effect waves-light" value="submit" type="submit"></input></span>
              </form>
              <br>
              </br>
              <div id="loader">
                <img src="https://images.all-free-download.com/images/graphicthumb/female_doctor_icon_cartoon_character_design_6829081.jpg"></img>

              </div>
              <div>
                <div id="doctorList"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Search;
