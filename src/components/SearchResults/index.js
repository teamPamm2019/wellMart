import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.uid} className="list-group-item">
        <p> {result.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
