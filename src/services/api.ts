import axios from "axios";

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: "https://workingapi.herokuapp.com/",
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
export default api;
