import Map from '../googleMaps/googlemaps';
import React from 'react';
import {Component} from 'react';



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

        <Map
          id="myMap"
          options={{
            center: { lat: 25.7617, lng: -80.1918 },
            zoom: 10,
            

          }}
          onMapLoad = {this.handleMapLoad}
        />   
       </>

       
    );    
  }
}

export default Discover;