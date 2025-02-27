import { configureStore } from "@reduxjs/toolkit";
import userCreate from "../service/userCreateService";
import userList from "../service/userService";
import bookList from "../service/bookService"


const store = configureStore({
    reducer: {
        userList,
        bookList,
        userCreate,
    },
  });
  
  export default store;