import Map from '../googleMaps/googlemaps';
import React from 'react';
import {Component} from 'react';
import searchDrRes from "../components/searchDocResults/searchDrRes";
import searchDr from '../components/SearchDoc/searchDr';
import Container from "../components/Container";


class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      map: {},
    
    }
  }

  handleMapLoad = (map) => {
    this.setState({
      map: map,
    
    })
  }

  handleLayer = (layer) => {
    console.log(this.state.map);
        
  }

  render() {
    return (
      <>
 <Container style={{ minHeight: "20%" }}>
          <h5 className="left-align">Search for Doctor in your Area:</h5>
         
          <searchDr
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
        </Container>

        <Map
          id="myMap"
          options={{
            center: { lat: 25.7617, lng: -80.1918 },
            zoom: 10,
            

          }}
          onMapLoad = {this.handleMapLoad}

              


/>
       



        />   
       </>

       
    );    
  }
}

export default Discover;