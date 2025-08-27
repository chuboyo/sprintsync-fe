import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userRegisterReducer,
    userLoginReducer
 } from "./reducers/userReducers";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
})

const store = configureStore({ reducer: rootReducer });

export default store;
