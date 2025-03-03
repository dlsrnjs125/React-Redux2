import { configureStore } from "@reduxjs/toolkit";
import userCreate from "../service/userCreateService";
import bookCreate from "../service/bookCreateService";
import userList from "../service/userService";
import bookList from "../service/bookService"
import orderList from "../service/orderService"
import userSearch from "../service/userSearchService"
import bookSearch from "../service/bookSearchService"
import userDelete from "../service/userDeleteService";
import bookDelete from "../service/bookDeleteService";


const store = configureStore({
    reducer: {
        userList,
        bookList,
        orderList,
        userCreate,
        bookCreate,
        userSearch,
        bookSearch,
        userDelete,
        bookDelete,
    },
  });
  
  export default store;