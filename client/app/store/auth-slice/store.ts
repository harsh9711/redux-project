import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth-slice";
import { config } from "process";
const store = configureStore({
    reducer:{
      auth:  authReducer,
    }
});
export default store;