import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDeleteThunk } from "../slice/apiSlices"; // Thunk 가져오기

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const userDeleteService = createSlice({
  name: "userDelete",
  initialState: {
    deletedUser: null, // 삭제된 사용자 정보를 저장
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDeleteThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDeleteThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedUser = action.payload; // 삭제된 사용자 정보 저장
      })
      .addCase(fetchUserDeleteThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userDeleteService.reducer;
