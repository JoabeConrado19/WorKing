/* eslint-disable */


import React, { useContext, useEffect, useRef, useState } from "react";

import { CardStyled } from "./style";
import { GoogleMap, useJsApiLoader, Marker, DirectionsService, DirectionsRenderer  } from "@react-google-maps/api";
import { DashboardContext } from "../../contexts/dashboard";

export const CardClient = (props) => {


  const { findMyLat, setMapLocation , zoom, lat, lng, setOpenModal, setClientId } = useContext(DashboardContext)
  
  const [directionsResponse, setdirectionsResponse] = useState(null)

  useEffect(()=>{
    findMyLat()
  

  }, [])

  async function calculateRoute(){
  
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: {
        lat: parseFloat(props.lat2),
        lng: parseFloat(props.lng2)
      },
      destination: {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    setdirectionsResponse(results)
    
  }

  function clearRoute(){
    setdirectionsResponse(null)
  }

  const { isLoaded } = useJsApiLoader({
    id: `google-map-script2`,
    googleMapsApiKey: "AIzaSyAwVDxVQJQtNgpy-48Mqt_Z7gHcHaQzP4c",
  });

  

  const position = {
    lat:parseFloat(props.lat),
    lng: parseFloat(props.lng),
  };
  const positionB = {
    lat:parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <CardStyled>
      <div className="card">
        <figure>
        {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={position}
              zoom={11.5}
            >
              <Marker
                position={position}
                options={{
                  label: {
                    text: `Origem`,
                    className: "map-marker",
                  },
                }}
              />
              <Marker
                position={positionB}
                options={{
                  label: {
                    text: 'Destino',
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
            onClick={() => {
              setOpenModal(true);
              setClientId(props.clientId);
            }}
          >
           Contato
          </button>

          <button
            className="btnRoute"
            onClick={(event) => {
              event.preventDefault();
              const positionA = {
                lat: `${props.lat2}`,
                lng: props.lng2
              };
              const positionB = {
                lat: lat,
                lng: lng
              }
              console.log(props.lat, props.lng , lat, lng)
              calculateRoute()
           

            }}
          >
            Rota
          </button>
        </div>
      </div>
    </CardStyled>
  );
};
