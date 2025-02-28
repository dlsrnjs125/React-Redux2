import { configureStore } from "@reduxjs/toolkit";
import userCreate from "../service/userCreateService";
import userList from "../service/userService";
import bookList from "../service/bookService"
import orderList from "../service/orderService"
import userSearch from "../service/userSearchService"


const store = configureStore({
    reducer: {
        userList,
        bookList,
        orderList,
        userCreate,
        userSearch,
    },
  });
  
  export default store;