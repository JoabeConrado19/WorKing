import { createContext, useState } from "react";

export const DashboardContext = createContext({})

export const DashboardProvider = ({children}) => {
    // Codigos aqui

    const [lat, setLat] = useState(-3.0306345);
    const [lng, setLng] = useState(-59.93555);
    const [zoom, setZoom] = useState(15);

    const findMyLat = () =>{
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const positionlat = latitude + " " + longitude
            console.log(positionlat)
            return positionlat
        }

        const error = () => {
        }
        navigator.geolocation.getCurrentPosition(success, error)
    }

    const setMapLocation = () =>{
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLat(latitude)
            setLng(longitude)
        }

        const error = () => {
        }
        navigator.geolocation.getCurrentPosition(success, error)
    }


    return(
        <DashboardContext.Provider value={{findMyLat , setMapLocation, lat, lng, zoom}}>
            {children}
        </DashboardContext.Provider>
    )
}