import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={props.result} className="list-group-item">

        <p> {this.props.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
