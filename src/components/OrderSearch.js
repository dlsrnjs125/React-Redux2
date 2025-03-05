import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderSearchThunk } from "../slice/apiSlices";
import { Input, Button, Table, Select } from "antd";
import moment from "moment"; // moment를 import

const { Option } = Select;

const OrderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState("user_name"); // 기본 검색 필드는 user_name
  const dispatch = useDispatch();
  const { orderSearch } = useSelector((state) => state.orderSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return; // 빈 값 검색 방지

    const searchParams = { searchField, searchValue };
    dispatch(fetchOrderSearchThunk(searchParams));
  };

  const columns = [
    { title: "Order ID", dataIndex: "id", key: "id" },
    { title: "User ID", dataIndex: "user", key: "user" },
    { title: "User Name", dataIndex: "user_name", key: "user_name" },
    { title: "Book ID", dataIndex: "book", key: "book" },
    { title: "Book Title", dataIndex: "book_title", key: "book_title" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Total Price", dataIndex: "total_price", key: "total_price" },
    { title: "Created At", dataIndex: "created_at", key: "created_at", render: (text) => moment(text).format('YYYY-MM-DD HH:mm:ss') // 날짜 포맷팅
    },
  ];

  return (
    <div>
      <Select
        value={searchField}
        onChange={(value) => setSearchField(value)}
        style={{ width: 150, marginRight: 10 }}
      >
        <Option value="user_name">User Name</Option>
        <Option value="book_title">Book Title</Option>
      </Select>

      <Input
        type="text"
        placeholder={`Search by ${searchField}`}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={handleSubmit}
        style={{ width: 200, marginRight: 10 }}
      />
      <Button onClick={handleSubmit} type="primary">
        Search
      </Button>

      <Table
        dataSource={orderSearch}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 15 }}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default OrderSearch;
