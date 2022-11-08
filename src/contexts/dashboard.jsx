import { createContext, useState } from "react";
import api from "../services/api";

export const DashboardContext = createContext({})

export const DashboardProvider = ({ children }) => {

    const Token = window.localStorage.getItem('@WorkingUser_Token');
    const Id = window.localStorage.getItem('@WorkingUser_Id');
    const [workers, setWorkers] = useState([])
    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [lat, setLat] = useState(-3.0306345);
    const [lng, setLng] = useState(-59.93555);
    const [jobsUser, setJobsUser] = useState([]);
    const [newJobsUser, setNewJobsUser] = useState(jobsUser);
    const [zoom, setZoom] = useState(15);
    const [userImg, setUserImg] = useState("");
    const [userName, setUserName] = useState("");

    const findMyLat = () => {
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

    const setMapLocation = () => {
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
                    "Authorization": `Bearer ${Token}`
                }

            })
            .then((response) => {

                if (response.status === 200) {
                    console.log(response)
                    setUserImg(`${response.data.profile_pic}`)
                    setUserName(`${response.data.name}`)

                }
            })

    }

    function SearchFilter() {
        // const searchResult = () => workers.find((element) => element.Job.Category === search)
        // // setJobsUser(searchResult)
        // console.log(searchResult());


        search === '' ? setJobsUser(newJobsUser) : setJobsUser(newJobsUser.filter((elem) => elem.Job.Category.includes(search)
        ))





    }








    return (
        <DashboardContext.Provider value={{ findMyLat, setMapLocation, lat, lng, zoom, getUserInfo, userImg, userName, setWorkers, workers, setFilteredProducts, filteredProducts, search, setSearch, jobsUser, setJobsUser, setNewJobsUser, newJobsUser, SearchFilter }}>
            {children}
        </DashboardContext.Provider>
    )
}