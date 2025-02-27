import { createSlice } from '@reduxjs/toolkit';
import { bookSlice } from '../slice/apiSlices';


// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const bookService = createSlice({
    name: "books",
    initialState: {
      books: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(bookSlice.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(bookSlice.fulfilled, (state, action) => {
          state.loading = false;
          state.books = action.payload; // response.data
        })
        .addCase(bookSlice.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default bookService.reducer; // reducer: 새 상태를 반환하는 함수