import { StyledLocation, LocationMain } from "../styles/StyledLocation";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { AsideComponent } from "../components/AboutUsPage/aside";
import { DashboardContext } from "../contexts/dashboard";


export const Location = () => {
  const { findMyLat, setMapLocation , lat, lng, zoom }:any = useContext(DashboardContext)


  
  useEffect(()=>{
    setMapLocation()
    findMyLat()
  

  }, [])

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDwAZ-IpVNt4hxGz48rXzLiebXbHKRm6ZA",
  });

  

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

        <AsideComponent/>
     
    </LocationMain>
  );
};
