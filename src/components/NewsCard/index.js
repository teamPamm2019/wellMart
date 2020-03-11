import React, { Component } from "react";
import "./style.css";
import { render } from "react-dom";

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=381c62fd27614fcc9a63adf478bdd823"
    )
      .then(response => {
        return response.json();
      })
      .then(myJSON => {
        //console.log(myJSON);
        this.setState({
          articles: myJSON.articles
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div className="NewsCard">
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <h4 style={{ textAlign: "left" }}>{item.title}</h4>
              <b>{item.author}</b>
              <img src={item.urlToImage} style={{ width: "50vw" }} />
              <a href={item.url}>Read More</a>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

// function NewsCard() {
//   return (
//     <div class="container-fluid">
//       <div class="row">
//         <div class="col-xs-12" id="header">
//           <h3>Health & Wellness News</h3>
//         </div>
//       </div>

//       <div class="row">
//         <div class="col-xs-12" id="buttonArea"></div>
//       </div>

//       <div class="row">
//         <div class="col-xs-9" id="gifArea"></div>
//       </div>

//       <div class="col-xs-3">
//         <form>
//           <fieldset>
//             <h5 id="moreNews">Search Your Health Topic</h5>
//             <input type="text" placeholder="E.g., Senior Care"></input>
//             <button type="submit" class="btn submit" data="submitBtn">
//               Submit
//             </button>
//           </fieldset>
//         </form>
//       </div>

//       const topics = ["music"]

//       <script src="https://code.jquery.com/jquery.js"></script>
//       <script
//         src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
//         integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
//         crossorigin="anonymous"
//       ></script>
//     </div>
//   );
// }

export default NewsCard;
