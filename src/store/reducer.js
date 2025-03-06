import { configureStore } from "@reduxjs/toolkit";
import userCreate from "../service/userCreateService";
import bookCreate from "../service/bookCreateService";
import orderCreate from "../service/orderCreateService";
import userList from "../service/userService";
import bookList from "../service/bookService";
import orderList from "../service/orderService";
import userSearch from "../service/userSearchService";
import bookSearch from "../service/bookSearchService";
import orderSearch from "../service/orderSearchService";
import userDelete from "../service/userDeleteService";
import bookDelete from "../service/bookDeleteService";


const store = configureStore({
    reducer: {
        userList,
        bookList,
        orderList,
        userCreate,
        bookCreate,
        orderCreate,
        userSearch,
        bookSearch,
        orderSearch,
        userDelete,
        bookDelete,
    },
  });
  
  export default store;