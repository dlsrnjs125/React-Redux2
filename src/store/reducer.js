import { configureStore } from "@reduxjs/toolkit";
import userCreate from "../service/userCreateService";
import userList from "../service/userService";
import bookList from "../service/bookService"
import orderList from "../service/orderService"


const store = configureStore({
    reducer: {
        userList,
        bookList,
        orderList,
        userCreate,
    },
  });
  
  export default store;