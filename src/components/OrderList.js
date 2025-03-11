import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderSlice } from '../slice/apiSlices';
import { ClientSideRowModelModule, PaginationModule } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

// 날짜 포맷 함수 (ISO 8601을 사람이 읽을 수 있는 형식으로 변환)
const formatDate = (timestamp) => {
    if (!timestamp) {
        console.warn("Invalid timestamp: ", timestamp); // 잘못된 값 로그로 확인
        return "Invalid Date"; // timestamp가 없으면 "Invalid Date" 반환
    }

    const date = new Date(timestamp); // ISO 8601 형식의 문자열을 Date 객체로 변환

    if (isNaN(date.getTime())) {
        console.warn("Invalid Date object: ", timestamp); // 유효하지 않은 Date 객체 로그로 확인
        return "Invalid Date"; // 유효하지 않으면 "Invalid Date" 표시
    }

    // 사람이 읽을 수 있는 형식으로 변환 (예: "2025-03-04 17:12:46")
    return date.toLocaleString('ko-KR', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
};

const OrderList = () => {
    const [orderData, setOrderData] = useState([]);
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.orderList);

    useEffect(() => {
        dispatch(orderSlice());
    }, [dispatch]);

    useEffect(() => {
        // 데이터를 포맷한 후 상태에 저장
        const formattedOrders = orders.map(order => ({
            ...order,
            created_at: formatDate(order.created_at) // 'created_at' 필드를 포맷팅
        }));
        setOrderData(formattedOrders);
    }, [orders]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // ag-Grid 컬럼 정의
    const columnDefs = [
        { headerName: "ID", field: "id", sortable: true, filter: true, flex: 0.3 },
        { headerName: "User_id", field: "user", sortable: true, filter: true, flex: 0.5 },
        { headerName: "User_name", field: "user_name", sortable: true, filter: true, flex: 1 },
        { headerName: "Book_id", field: "book", sortable: true, filter: true, flex: 0.5 },
        { headerName: "Book_title", field: "book_title", sortable: true, filter: true, flex: 1 },
        { headerName: "Address", field: "address", sortable: true, filter: true, flex: 0.7 },
        { headerName: "Quantity", field: "quantity", sortable: true, filter: true, flex: 0.5 },
        { headerName: "Total_Price", field: "total_price", sortable: true, filter: true, flex: 0.7 },
        { headerName: "Create_at", field: "created_at", sortable: true, filter: true, flex: 1.5 },
    ];

    return (
        <div>
            <h2>Order List</h2>
            <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
                <AgGridReact
                    rowData={orderData} // 주문 데이터를 그리드에 전달
                    columnDefs={columnDefs} // 컬럼 정의 전달
                    pagination={true} // 페이지네이션 활성화
                    paginationPageSize={10} // 페이지 크기를 10개로 설정
                    domLayout="autoHeight" // 높이를 자동으로 맞추기
                    modules={[ClientSideRowModelModule, PaginationModule]} // 모듈을 지정합니다.
                    onGridReady={(params) => params.api.sizeColumnsToFit()} // 그리드가 준비되면 컬럼 너비를 자동으로 맞추기
                />
            </div>
        </div>
    );
}

export default OrderList;
