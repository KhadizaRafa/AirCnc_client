import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = () => {
    const mapStyles = {
  width: '100%',
  height: '100%',
};
    return (
      //   <Map
      //   google={this.props.google}
      //   zoom={8}
      //   style={mapStyles}
      //   initialCenter={{ lat: 47.444, lng: -122.176}}
      // />
      <iframe width="600" height="820" id="gmap_canvas" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                      
    );
};

export default GoogleMap;

