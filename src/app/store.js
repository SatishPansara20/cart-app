import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import productReducer from "../features/product/ProductSlicer";
import { productAPI } from "../features/product/ProductAPI";

import cartReducer from "../features/product/CartSlicer";

// import { applyMiddleware, combineReducers, createStore } from "redux";
// import Raven from "react-raven";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
