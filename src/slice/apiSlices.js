import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Axios 인스턴스 생성 (API 서버 URL 설정)
const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-Type": "application/json",
    },
  });

// User List api
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

// Book List api
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

// Order List api
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


// User Create api
export const fetchUserCreateThunk = createAsyncThunk("userCreate/fetchUserCreateThunk", async (body) => {
  const response = await api.post(`/users/create/`, body);
  console.log("response.data", response.data);
  return response.data;
});

// Book Create api
export const fetchBookCreateThunk = createAsyncThunk("bookCreate/fetchBookCreateThunk", async (body) => {
  const response = await api.post(`/books/create/`, body);
  console.log("response.data", response.data);
  return response.data;
});


// User name Search api
export const fetchUserSearchThunk = createAsyncThunk("userSearch/fetchUserSearchThunk", async ({ searchField, searchValue }) => {
  let response;
    
    if (searchField === 'age') {
      response = await api.get(`/users/age_gte/${searchValue}/`);
    } else {
      response = await api.get(`/users/name/${searchValue}/`);
    }
  // const response = await api.get(`/users/name/${name}/`);
  console.log("response.data", response.data);
  return response.data;
});

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