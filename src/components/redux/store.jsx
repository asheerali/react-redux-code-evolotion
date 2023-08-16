import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  // middleware: [logger],
  middleware: composeWithDevTools[logger],
});

export default store;
