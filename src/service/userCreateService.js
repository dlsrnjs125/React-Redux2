import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserCreateThunk } from '../slice/apiSlices';

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const userCreateService = createSlice({
    name: "userCreate",
    initialState: {
        userCreate: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserCreateThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserCreateThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.userCreate = action.payload; // response.data
        })
        .addCase(fetchUserCreateThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userCreateService.reducer; // reducer: 새 상태를 반환하는 함수