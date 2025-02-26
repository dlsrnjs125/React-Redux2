import { configureStore } from "@reduxjs/toolkit";
import userCreate from "../service/userCreateService";

const store = configureStore({
    reducer: {
        userCreate,
    },
  });
  
  export default store;