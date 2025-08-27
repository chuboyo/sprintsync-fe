import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userRegisterReducer,
    userLoginReducer
 } from "./reducers/userReducers";
import { listTaskReducer,
    createTaskReducer,
    editTaskReducer, 
    getAIDescReducer
 } from "./reducers/taskReducers";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    listTasks: listTaskReducer,
    createTask: createTaskReducer,
    editTask: editTaskReducer,
    getAIDesc: getAIDescReducer,
})

const store = configureStore({ reducer: rootReducer });

export default store;
