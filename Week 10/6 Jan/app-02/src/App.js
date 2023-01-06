import React, { useEffect, useState } from "react";
import GoogleMapContainer from "./GoogleMapsContainerComponent";

function App() {
  // By Default it is taking London's Current Location
  const [currentLocation, setCurrentLocation] = useState({
    lat: 51.5072,
    lng: 0.1276,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  });
  return (
    <div>
      <GoogleMapContainer currentLocation={currentLocation} />
    </div>
  );
}

export default App;
