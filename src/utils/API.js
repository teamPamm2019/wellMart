import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const APIkey2= process.env.REACT_APP_BETDOC_KEY;



export default {

  getDoctor: function(location) {
    return axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=25.7617,-80.1918,10&skip=2&limit=10&user_key=27d45cbe86940bb275775bb513f7deff");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};