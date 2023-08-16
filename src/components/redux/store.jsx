import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user/userReducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: [logger],
  middleware: composeWithDevTools[(logger, thunk)],
});

export default store;
