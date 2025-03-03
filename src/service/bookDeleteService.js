import { createSlice } from "@reduxjs/toolkit";
import { fetchBookDeleteThunk } from "../slice/apiSlices"; // Thunk 가져오기

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const bookDeleteService = createSlice({
  name: "bookDelete",
  initialState: {
    deletedBook: null, // 삭제된 책 정보를 저장
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDeleteThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookDeleteThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedBook = action.payload; // 삭제된 책 정보 저장
      })
      .addCase(fetchBookDeleteThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookDeleteService.reducer;