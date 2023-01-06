import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const GoogleMapContainer = ({ currentLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
  });

  if (isLoaded) {
    return (
      <GoogleMap
        zoom={12}
        center={currentLocation}
        mapContainerStyle={{
          height: "80vh",
          width: "80%",
        }}
      >
        <MarkerF position={currentLocation} />
      </GoogleMap>
    );
  }
};

export default GoogleMapContainer;
