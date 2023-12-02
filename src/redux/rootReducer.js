import { combineReducers } from "@reduxjs/toolkit";
import LoginReducer from "./Login/LoginReducer";
import Cartreducer from "./Cart/CartReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  cart: Cartreducer,
});

export default rootReducer;
