import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Searchbar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="doctors"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="doctor"
          type="text"
          className="form-control"
          placeholder="enter your zipcode"
          id="doctor"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
