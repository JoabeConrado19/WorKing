import React, { useContext, useEffect } from "react";

import { CardStyled } from "./style";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { DashboardContext } from "../../contexts/dashboard";


export const CardClient = (props:any) => {

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
    <CardStyled>
      <div className="card">
        <figure>
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
                    text: `${props.Name}`,
                    className: "map-marker",
                  },
                }}
              />
            </GoogleMap>
          ) : (
            <></>
          )}
        </figure>
        <div>
          <div className="cardProfile">
            <div>
              <h3>{props.Name}</h3>
            </div>
            <span> {props.Categoty} </span>
          </div>
        </div>
        <p>
          {props.Description}
        </p>
        <div className="cardButtons">
          {/* <ButtomContact />
                <ButtomRoute /> */}
          <button
            className="btnContact"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Entrar em contato
          </button>

          <button
            className="btnRoute"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Gerar rota
          </button>
        </div>
      </div>
    </CardStyled>
  );
};
