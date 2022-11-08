import { StyledLocation, LocationMain } from "../styles/StyledLocation";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { AsideComponent } from "../Components/AboutUsPage/aside";

export const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDwAZ-IpVNt4hxGz48rXzLiebXbHKRm6ZA",
  });

  const [lat, setLat] = useState(-3.0306345);
  const [lng, setLng] = useState(-59.93555);
  const [zoom, setZoom] = useState(15);

  const position = {
    lat: lat,
    lng: lng,
  };

  return (
    <LocationMain>
      <StyledLocation>
        <main className="MapContainer">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={position}
              zoom={zoom}
            >
              <Marker
                position={position}
                options={{
                  label: {
                    text: "Marcador teste",
                    className: "map-marker",
                  },
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </main>
      </StyledLocation>

      <AsideComponent />
    </LocationMain>
  );
};
