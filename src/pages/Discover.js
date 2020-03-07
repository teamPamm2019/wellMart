import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div class="row">
          <div class="col s4">
            <select id="op1">
              <option value="" disabled selected>
                Specialties
              </option>
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
            <form class="bodyContent">
              <span>
                Zip Code:{" "}
                <input
                  id="to-do"
                  type="text"
                  class="form-control"
                  name="fullName"
                  value=" "
                ></input>
              </span>
              <span>
                <input
                  id="add-to-do"
                  class="btn waves-effect waves-light"
                  value="submit"
                  type="submit"
                ></input>
              </span>
            </form>
            <br></br>
            <div id="loader">
              <img
                src="https://lh3.googleusercontent.com/proxy/9gPejvEmIickkvqTquK2yEqOl9XnyWp8p1QiwFqqyo_UTA36WN1W5kQPkBE1EECPgpEzc5zwpu7tXoxlXqgQPLL9Xg"
                class="bodyContent"
              ></img>
            </div>
            <div>
              <div id="doctorList"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
