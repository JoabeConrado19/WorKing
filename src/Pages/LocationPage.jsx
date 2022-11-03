import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { BsPinMapFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { StyledAside, StyledBody } from "../styles/StyledClientDash";
import { StyledLocation, LocationMain } from "../styles/StyledLocation";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";

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

      <StyledAside>
        <HiOutlineUserCircle />
        <AiOutlineHome />
        <AiOutlineUser />
        <FiMapPin />
        <FaWallet />
        <AiOutlineClockCircle />
        <ImExit />
        <FiUsers />
      </StyledAside>
    </LocationMain>
  );
};
