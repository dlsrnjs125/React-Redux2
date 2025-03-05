import { createSlice } from '@reduxjs/toolkit';
import { fetchOrderSearchThunk } from '../slice/apiSlices';

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const orderSearchService = createSlice({
    name: "orderSearch",
    initialState: {
      orderSearch: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchOrderSearchThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchOrderSearchThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.orderSearch = action.payload; // response.data
        })
        .addCase(fetchOrderSearchThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
});

export default orderSearchService.reducer;
