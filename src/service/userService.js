import { createSlice } from '@reduxjs/toolkit';
import { userSlice } from '../slice/apiSlices';


// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const userService = createSlice({
    name: "users",
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userSlice.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(userSlice.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload; // response.data
        })
        .addCase(userSlice.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default userService.reducer; // reducer: 새 상태를 반환하는 함수