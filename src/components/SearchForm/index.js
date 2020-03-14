import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
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
          placeholder="type your zipcode"
          id="add-to-do"
        />
  <button type="submit" onClick={props.handleFormSubmit} className="btn waves-effect waves-light blue darken-1">
          Search
        </button>
       
      </div>
    </form>
  );
}

export default SearchForm;
