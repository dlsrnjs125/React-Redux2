import { createSlice } from '@reduxjs/toolkit';
import { fetchBookCreateThunk } from '../slice/apiSlices';

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const bookCreateService = createSlice({
    name: "bookCreate",
    initialState: {
      bookCreate: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBookCreateThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBookCreateThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.bookCreate = action.payload; // response.data
        })
        .addCase(fetchBookCreateThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default bookCreateService.reducer; // reducer: 새 상태를 반환하는 함수