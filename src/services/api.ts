import axios from "axios";

const api = axios.create({
  baseURL: "https://workingapi.herokuapp.com/",
});
export default api;
