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

// User List api
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


// User Create api
export const fetchUserCreateThunk = createAsyncThunk("userCreate/fetchUserCreateThunk", async (body) => {
  const response = await api.post(`/users/`, body);
  console.log("response.data", response.data);
  return response.data;
});

  