import React from "react";


function SearchDrRes(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={this.props.result} className="list-group-item">
        </li>
      ))}
    </ul>
  );
}

export default SearchDrRes;
