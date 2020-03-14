import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.uid} className="list-group-item">
        <p> {result.name}</p>
        <p> {result.location}</p>
        <p> {result.city}</p>
        <p> {result.state}</p>
        <p> {result.zip}</p>


        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
