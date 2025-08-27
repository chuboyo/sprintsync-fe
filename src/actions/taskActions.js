import axios from "axios";
import { LIST_TASK_REQUEST,
    LIST_TASK_SUCCESS,
    LIST_TASK_FAIL,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAIL,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAIL, 
    GET_AI_DESC_REQUEST,
    GET_AI_DESC_SUCCESS,
    GET_AI_DESC_FAIL,
    TASK_DAILY_SUMMARY_REQUEST,
    TASK_DAILY_SUMMARY_SUCCESS,
    TASK_DAILY_SUMMARY_FAIL,

 } from "../constants/taskConstants";

export const createTask =
  (params) =>
  async (dispatch) => {
    try {
      dispatch({
        type: CREATE_TASK_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/tasks/",
        {
          title: params.title,
          description: params.description,
        },
        config
      );

      dispatch({
        type: CREATE_TASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_TASK_FAIL,
        payload:
        error.response && error.response.data
        ? "An error occurred"
        : error.message,
      });
    }
  };

export const listTasks =
  () => async (dispatch) => {
    try {
      dispatch({
        type: LIST_TASK_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.get(
        `/tasks`,
        config
      );

      dispatch({
        type: LIST_TASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LIST_TASK_FAIL,
        payload:
          error.response && error.response.data
            ? "An error occurred"
            : error.message,
      });
    }
  };


export const editTask =
  (
    params
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: EDIT_TASK_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.patch(
        `/tasks/${params.task_id}/`,
        {
          title: params.title,
          description: params.description,
          status: params.status,
        },
        config
      );

      dispatch({
        type: EDIT_TASK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_TASK_FAIL,
        payload:
          error.response && error.response.data
            ? "An error occurred"
            : error.message,
      });
    }
  };

export const getAIDesc =
  (params) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_AI_DESC_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/tasks/draft_description/",
        {
          title: params.title,
        },
        config
      );

      dispatch({
        type: GET_AI_DESC_SUCCESS,
        payload: data,
      });
      return { payload: data };
    } catch (error) {
      dispatch({
        type: GET_AI_DESC_FAIL,
        payload:
        error.response && error.response.data
        ? "An error occurred"
        : error.message,
      });
    }
  };

export const getDailySummary = () => async (dispatch) => {
    try {
      dispatch({ type: TASK_DAILY_SUMMARY_REQUEST });
  
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.get(`/tasks/daily_summary/`, config);
  
      dispatch({
        type: TASK_DAILY_SUMMARY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TASK_DAILY_SUMMARY_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };