import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {

  getDoctor: function(doctor) {
    return axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=" + doctor + "/location");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};