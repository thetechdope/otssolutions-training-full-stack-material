import React, { useEffect, useState } from "react";
import GoogleMapContainer from "./GoogleMapContainer";

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 28.9845,
    lng: 77.7064,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Longitude ", position.coords.longitude);
      // setCurrentLocation({
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude,
      // });
    });
  }, []);

  return <GoogleMapContainer currentLocation={currentLocation} />;
}

export default App;
