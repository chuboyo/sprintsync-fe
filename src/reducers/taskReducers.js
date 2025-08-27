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

export const createTaskReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_TASK_REQUEST:
        return { loading: true };
  
      case CREATE_TASK_SUCCESS:
        return { loading: false, task: action.payload };
  
      case CREATE_TASK_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
export const editTaskReducer = (state = {}, action) => {
    switch (action.type) {
      case EDIT_TASK_REQUEST:
        return { loading: true };
  
      case EDIT_TASK_SUCCESS:
        return { loading: false, task: action.payload};
  
      case EDIT_TASK_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
export const listTaskReducer = (state = {}, action) => {
    switch (action.type) {
      case LIST_TASK_REQUEST:
        return { loading: true };
  
      case LIST_TASK_SUCCESS:
        return { loading: false, tasks: action.payload };
  
      case LIST_TASK_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

export const getAIDescReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_AI_DESC_REQUEST:
        return { loading: true };
  
      case GET_AI_DESC_SUCCESS:
        return { loading: false, ai_description: action.payload };
  
      case GET_AI_DESC_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };


export const dailySummaryReducer = (state = { summary: [] }, action) => {
    switch (action.type) {
      case TASK_DAILY_SUMMARY_REQUEST:
        return { loading: true, summary: [] };
      case TASK_DAILY_SUMMARY_SUCCESS:
        return { loading: false, summary: action.payload };
      case TASK_DAILY_SUMMARY_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };