import { StyledLocation, LocationMain } from "../styles/StyledLocation";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { DashboardContext } from "../contexts/dashboard";
import api from "../services/api";

export const Location = () => {
  const { findMyLat, setMapLocation, lat, lng, zoom }: any =
    useContext(DashboardContext);

  const [jobsMarkers, setJobsMarkers] = useState<any>([]);

  useEffect(() => {
    api.get("/jobs").then((response) => {
      setJobsMarkers(response.data);
    });
  }, []);

  useEffect(() => {
    setMapLocation();
    findMyLat();
    console.log(jobsMarkers);
  }, []);

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
              zoom={12}
            >
              {jobsMarkers?.map(
                (element: {
                  id: any;

                  Job: { lat: any; lnt: any; Job_Name: any; id: any };
                }) => (
                  <Marker
                    key={element.id}
                    position={{
                      lat: element.Job.lat,
                      lng: element.Job.lnt,
                    }}
                    options={{
                      label: {
                        text: element.Job.Job_Name,
                        className: "map-marker",
                        color: "yellow"
                        
                      },
                    }}
                  />
                )
              )}
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