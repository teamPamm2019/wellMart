import React from "react";
import "./style.css";

function DiscoverCard() {
  return (
    <div>
      <div class="container">
        <form>
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
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/7iih56pbUgqo74YpUPJPo0yHCW8-ecWl6GE5XNjsoUJtBvwYGVFj2hZdqbP6BZn1IQEOTyconY_aQb2fkcNIZ4qbZS7Dtpc"
            className="bodyContent"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default DiscoverCard;
