import axios from "axios";
import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";




const mapStyles = {
  width: "50%",
  height: "50%"
};

export class MapContainer extends Component {
  state = {
    laT1: 0,
    lnG1: 0,
    zipcode: 33143,
    elements: [],
    contentString: [],
    isOpen: false
  };

  async componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/c1wr56zxJrT9VdP63xSMddq1jzu3difJ6qcIpH87Ak8MWbBRQsfzPP3r5ISW15ET/info.json/" +
          this.state.zipcode +
          "/degrees"
      )
      .then(res => {
        console.log(JSON.stringify(res));
        this.setState({ laT1: res.data.lat, lnG1: res.data.lng });
        console.log(this.state.laT1, this.state.lnG1);
        this.secondfunc(this.state.laT1, this.state.lnG1);
      });
  }

  secondfunc = () => {
 const apiKey1 = process.env.REACT_APP_BETDOC_KEY;

    axios
      .get(
        "https://api.betterdoctor.com/2016-03-01/practices?location=" +
          this.state.laT1 +
          "," +
          this.state.lnG1 +
          "," +
          10 +
          apiKey1
      )
      .then(res => {
        const results = Object.keys(res.data).map(i => res.data[i]);
        var newStateArray = this.state.elements.slice();
        for (var i = 0; i < results[1].length; i++) {
          newStateArray.push({
            lat: results[1][i].lat,
            long: results[1][i].lon,
            name: results[1][i].name,
            street: results[1][i].visit_address.street,
            city: results[1][i].visit_address.city,
            state: results[1][i].visit_address.state,
            zip: results[1][i].visit_address.zip,
            phone: results[1][i].phones[0].number
          });
        }
        this.setState({ elements: newStateArray });
        console.log(this.state.elements);
        this.info(this.state.elements);
      });
  };

  info = () => {
    var newStateArray1 = this.state.contentString.slice();
    for (var i = 0; i < this.state.elements.length; i++) {
      newStateArray1.push(
        '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          this.state.elements[i].name +
          "<div" +
          this.state.elements[i].street +
          "</div>" +
          "<div>" +
          this.state.elements[i].city +
          "," +
          " " +
          this.state.elements[i].state +
          "," +
          " " +
          this.state.elements[i].zip +
          "</div>" +
          "<div>" +
          "phone:" +
          this.state.elements[i].phone +
          "</div>"
      );
    }
    this.setState({ contentString: newStateArray1 });
    console.log(this.state.contentString);
  };

  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  displayMarkers = () => {
    return this.state.elements.map((element, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: element.lat,
            lng: element.long
          }}
          icon={{
            url: "https://img.icons8.com/emoji/48/000000/man-health-worker.png"
          }}
          onClick={() => this.handleToggleOpen()}
        >
        {
          this.state.isOpen &&

					<InfoWindow onCloseClick={() => this.setState({isOpen: false})}>
              <div>
                <span>something</span>
              </div>
            </InfoWindow>

        }
        </Marker>
      );
    });
  };

  // displayInfoWindow = () => {
  //   return this.state.elements.map((element, index) => {
  //     return <InfoWindow key={index} id={index} position={{
  //      lat: element.lat,
  //      lng: element.long,
  //    }}
  //    icon={{url: "https://img.icons8.com/emoji/48/000000/man-health-worker.png"}}/>
  //   });
  // }

  render() {


    return (

    
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 25.827848, lng: -80.316078 }}
      ><SearchForm/>
        {this.displayMarkers()}
        {/* {this.displayInfoWindow()} */}
      </Map>
  
    );
  }
}

const apiKey2 = process.env.REACT_APP_GOOGLE_KEY

export default GoogleApiWrapper({
  apiKey: apiKey2
})(MapContainer);