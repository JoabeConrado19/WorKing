import { createContext, useState } from "react";
import api from "../services/api";

export const DashboardContext = createContext({})

export const DashboardProvider = ({children}) => {
    
    const Token = window.localStorage.getItem('@WorkingUser_Token');
    const Id = window.localStorage.getItem('@WorkingUser_Id');



    const [openModal, setOpenModal] = useState(false)
    const [lat, setLat] = useState(-3.0306345);
    const [lng, setLng] = useState(-59.93555);
    const [zoom, setZoom] = useState(15);
    const [userImg, setUserImg] = useState("");
    const [userName, setUserName] = useState("");
    const [menu, setMenu] = useState(false);

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

    const getUserInfo = () => {
        api
        .get(`/users/${Id}`, {

            headers: {
                Authorization: `Bearer ${Token}`
              }

        })
        .then((response) => {
  
          if (response.status == 200) {
           console.log(response)
           setUserImg(`${response.data.profile_pic}`)
           setUserName(`${response.data.name}`)
            
          }
      })
      
    }

    


    return(
        <DashboardContext.Provider value={{findMyLat , setMapLocation, lat, lng, zoom, getUserInfo, userImg, userName, openModal, setOpenModal, setMenu, menu }}>
            {children}
        </DashboardContext.Provider>
    )
}