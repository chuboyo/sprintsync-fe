import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL, 
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "../constants/userConstants";

export const register =
  (username, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/users/",
        {
          username: username,
          email: email,
          password: password,
        },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.email
            ? error.response.data.email[0]
            : error.response && error.response.data.password
            ? error.response.data.password[0]
            : error.message,
      });
    }
  };

  export const login = (username, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "/users/login/",
        {
          username: username,
          password: password,
        },
        config
      );
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      // set authorization token to authenticated user token
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
      // store user in local storage
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
        console.log(error)
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.non_field_errors
            ? error.response.data.non_field_errors[0]
            : error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const logout = () => async (dispatch) => {
    // set authorization token to empty string
    axios.defaults.headers.common["Authorization"] = "";
    // remove user from local storage
    localStorage.removeItem("user");

    dispatch({ type: USER_LOGOUT })
  };
  