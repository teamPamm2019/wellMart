import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
const APIkey2= process.env.REACT_APP_GOOGLE_KEY;

export default {

  getDoctor: function(doctor) {
    return axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=" + doctor + "/location" + APIkey2);
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};