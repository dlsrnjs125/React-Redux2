import { createSlice } from '@reduxjs/toolkit';
import { orderSlice } from '../slice/apiSlices';


// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const orderService = createSlice({
    name: "orders",
    initialState: {
      orders: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(orderSlice.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(orderSlice.fulfilled, (state, action) => {
          state.loading = false;
        //   console.log("action", action.payload); // data 넘어오는지 확인
          state.orders = action.payload; // response.data
        })
        .addCase(orderSlice.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export default orderService.reducer; // reducer: 새 상태를 반환하는 함수