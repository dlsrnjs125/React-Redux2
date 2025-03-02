import { createSlice } from '@reduxjs/toolkit';
import { fetchBookSearchThunk } from '../slice/apiSlices';

// slice에서 받은 API 데이터를 저장하는 곳
const bookSearchService = createSlice({
    name: "bookSearch",
    initialState: {
      bookSearch: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBookSearchThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBookSearchThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.bookSearch = action.payload; // API 응답 데이터 저장
        })
        .addCase(fetchBookSearchThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
export default bookSearchService.reducer;
