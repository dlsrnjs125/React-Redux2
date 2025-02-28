import { createSlice } from '@reduxjs/toolkit';
import { fetchUserSearchThunk } from '../slice/apiSlices';

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const userSearchService = createSlice({
    name: "userSearch",
    initialState: {
      userSearch: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserSearchThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserSearchThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.userSearch = action.payload; // response.data
        })
        .addCase(fetchUserSearchThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userSearchService.reducer; // reducer: 새 상태를 반환하는 함수