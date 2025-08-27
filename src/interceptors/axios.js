import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

// redirect to login on 403 error
axios.interceptors.response.use(
  (resp) => resp,
  (error) => {
    if (error.response.status === 403) {
      // window.location.href = login;
      // console.log("intercepted");
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);