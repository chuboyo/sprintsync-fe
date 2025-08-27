import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.access}`;
}