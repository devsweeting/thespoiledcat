import React, {Component} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiZGV2c3dlZXRpbmciLCJhIjoiY2p0N3JjYXZ2MDExdTQ0cDR4YzR0c2ZtOCJ9.gVk41f8WEAPVJAFSXNbrAQ';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.522984,
        longitude: -122.670157,
        zoom: 14,
        bearing: 0,
        pitch: 0,
        width: 400,
        height: 400,
      }
    };
  }

render() {
    const {viewport} = this.state;
return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
          <NavigationControl/>
        </div>
      </MapGL>
    );
  }
}
