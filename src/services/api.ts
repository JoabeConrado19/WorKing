import axios from "axios";


const api = axios.create({
    baseURL: "https://workingapi.herokuapp.com/",
    timeout: 5000,
});

export default api;
