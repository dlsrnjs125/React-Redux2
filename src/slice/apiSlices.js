import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Axios 인스턴스 생성 (API 서버 URL 설정)
const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-Type": "application/json",
    },
  });

// User List API
export const userSlice = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await api.get("/users/");
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

// Book List API
export const bookSlice = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await api.get("/books/");
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

// Order List API
export const orderSlice = createAsyncThunk("orders/fetchOredrs", async () => {
  try {
    const response = await api.get("/orders/");
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

// User Create API
export const fetchUserCreateThunk = createAsyncThunk("userCreate/fetchUserCreateThunk", async (body) => {
  const response = await api.post(`/users/create/`, body);
  console.log("response.data", response.data);
  return response.data;
});

// Book Create API
export const fetchBookCreateThunk = createAsyncThunk("bookCreate/fetchBookCreateThunk", async (body) => {
  const response = await api.post(`/books/create/`, body);
  console.log("response.data", response.data);
  return response.data;
});

// Order Create API
export const fetchOrderCreateThunk = createAsyncThunk("orderCreate/fetchOrderCreateThunk", async (body) => {
  const response = await api.post(`/orders/create/`, body);
  console.log("response.data", response.data);
  return response.data;
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await api.get('/users/'); // 실제 API 엔드포인트 확인 필요
  console.log("fetchUsers response", response);  // 응답 로그 추가
  return response.data;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await api.get('/books/'); // 실제 API 엔드포인트 확인 필요
  console.log("fetchBooks response", response);  // 응답 로그 추가
  return response.data;
});


// User name, email, age Search API
export const fetchUserSearchThunk = createAsyncThunk(
  "userSearch/fetchUserSearchThunk",
  async ({ searchField, searchValue }) => {
    const response = await api.get(`/users/search/${searchField}/${searchValue}/`);
    console.log("response.data", response.data);
    return response.data;
  }
);

// Book title, author, publisher, price Search API
export const fetchBookSearchThunk = createAsyncThunk(
  "bookSearch/fetchBookSearchThunk",
  async ({ searchField, searchValue }) => {
    const response = await api.get(`/books/search/${searchField}/${searchValue}/`);
    console.log("response.data", response.data);
    return response.data;
  }
);

// Order user_name, book_title Search API
export const fetchOrderSearchThunk = createAsyncThunk(
  "orderSearch/fetchOrderSearchThunk",
  async ({ searchField, searchValue }) => {
    const response = await api.get(`/orders/search/${searchField}/${searchValue}/`);
    console.log("response.data", response.data);
    return response.data;
  }
);

// User Delete API
export const fetchUserDeleteThunk = createAsyncThunk(
  "userDelete/fetchUserDeleteThunk",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/users/delete/${id}/`);
      console.log("User deleted:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      return rejectWithValue(error.response?.data || "Failed to delete user");
    }
  }
);

// Book Delete API
export const fetchBookDeleteThunk = createAsyncThunk(
  "bookDelete/fetchBookDeleteThunk",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/books/delete/${id}/`);
      console.log("Book deleted:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting book:", error);
      return rejectWithValue(error.response?.data || "Failed to delete book");
    }
  }
);