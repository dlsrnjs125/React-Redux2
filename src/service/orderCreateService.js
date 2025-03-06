import { createSlice } from '@reduxjs/toolkit';
import { fetchOrderCreateThunk, fetchUsers, fetchBooks } from '../slice/apiSlices';

// slice에서 받은 api에 대해서 데이터를 저장하는 곳
const orderCreateService = createSlice({
    name: "orderCreate",
    initialState: {
        orderCreate: [],  // 주문 생성 결과
        users: [],        // 사용자 데이터
        books: [],        // 도서 데이터
        loading: false,   // 로딩 상태
        error: null,      // 에러 상태
    },
    reducers: {},
    extraReducers: (builder) => {
        // 주문 생성 API 호출 상태 처리
        builder
            .addCase(fetchOrderCreateThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrderCreateThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.orderCreate = action.payload; // response.data
            })
            .addCase(fetchOrderCreateThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // 사용자 데이터 API 호출 상태 처리
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload; // 사용자 데이터 저장
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // 도서 데이터 API 호출 상태 처리
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload; // 도서 데이터 저장
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default orderCreateService.reducer; // reducer: 새 상태를 반환하는 함수
