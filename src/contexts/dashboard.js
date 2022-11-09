import { createContext, useState } from "react";
import api from "../services/api";

export const DashboardContext = createContext({})

export const DashboardProvider = ({ children }) => {

    const Token = window.localStorage.getItem('@WorkingUser_Token');
    const Id = window.localStorage.getItem('@WorkingUser_Id');
    const [openModal, setOpenModal] = useState(false)
    const [lat, setLat] = useState(-3.0306345);
    const [lng, setLng] = useState(-59.93555);
    const [zoom, setZoom] = useState(15);
    const [userImg, setUserImg] = useState("");
    const [userName, setUserName] = useState("");
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState('')
    const [jobsUser, setJobsUser] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([...jobsUser])
    const [workers, setWorkers] = useState([])
    const [workerSearch, setWorkerSearch] = useState('')
    const [filteredWorkProducts, setFilteredWorkProducts] = useState([...workers])



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
                    Authorization: `Bearer ${Token}`
                }

            })
            .then((response) => {

                if (response.status === 200) {

                    setUserImg(`${response.data.profile_pic}`)
                    setUserName(`${response.data.name}`)

                }
            })

    }

    function searchFilter() {

        if (search.length > 0) {
            setFilteredProducts(filteredProducts.filter((elem) => elem.Job.Category.toLowerCase().includes(search.toLowerCase())))
        } else {
            setFilteredProducts(jobsUser)
        }

        console.log(filteredProducts);
        console.log(jobsUser)
    }

    function getWorkInfo() {

        try {
            api.get("jobs").then((response) => {
                setWorkers(response.data);
                setFilteredWorkProducts(response.data);
                // setJobs(response.data);
                console.log('setFiltered:', filteredWorkProducts, ' workers:', workers)
            })
        } catch (error) {
            console.error(error)
        }
    }







    function searchWorkFilter() {
        if (workerSearch.length > 0) {
            setFilteredWorkProducts(filteredWorkProducts.filter((elem) => elem.Job.Job_Name.toLowerCase().includes(workerSearch.toLowerCase())))
        } else (setFilteredWorkProducts(workers))

    }



    return (
        <DashboardContext.Provider value={{ findMyLat, setMapLocation, lat, lng, zoom, getUserInfo, userImg, userName, openModal, setOpenModal, setMenu, menu, searchFilter, workers, setWorkers, search, setSearch, jobsUser, setJobsUser, filteredProducts, setFilteredProducts, workerSearch, setWorkerSearch, searchWorkFilter, filteredWorkProducts, setFilteredWorkProducts, getWorkInfo }}>
            {children}
        </DashboardContext.Provider>
    )
}