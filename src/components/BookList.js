import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSlice } from '../slice/apiSlices';
import { ClientSideRowModelModule, PaginationModule, ValidationModule  } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";


const BookList = () => {
    const [bookData, setBookData] = useState([]);
    const dispatch = useDispatch(); // slice 함수 api 실행
    const { books, loading } = useSelector((state) => state.bookList);     

    useEffect(() => {
        dispatch(bookSlice());
    }, [dispatch]);

    useEffect(() => {
        setBookData(books);
    }, [books]);

    if (loading) {
    return <p>Loading...</p>;
    }
    
// ag-Grid 컬럼 정의 (컬럼 크기 자동 조정)
  const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true, flex: 1 },
    { headerName: "Title", field: "title", sortable: true, filter: true, flex: 1 },
    { headerName: "Author", field: "author", sortable: true, filter: true, flex: 1 },
    { headerName: "Publisher", field: "publisher", sortable: true, filter: true, flex: 1 },
    { headerName: "Price", field: "price", sortable: true, filter: true, flex: 1 },
    { headerName: "Stock", field: "stock", sortable: true, filter: true, flex: 1 },
  ];

    return (
        <div>
      <h2>Book List</h2>
      <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
        <AgGridReact
            rowData={bookData} // 책 데이터를 그리드에 전달
            columnDefs={columnDefs} // 컬럼 정의 전달
            pagination={true} // 페이지네이션 활성화
            paginationPageSize={10} // 페이지 크기를 10개로 설정
            domLayout="autoHeight" // 높이를 자동으로 맞추기
            modules={[ClientSideRowModelModule, PaginationModule, ValidationModule]} // 모듈을 지정합니다.
            onGridReady={(params) => params.api.sizeColumnsToFit()} // 그리드가 준비되면 컬럼 너비를 자동으로 맞추기
        />
      </div>

    </div>

    );
}

export default BookList;