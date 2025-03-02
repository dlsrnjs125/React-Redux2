import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookSearchThunk } from "../slice/apiSlices";
import { Input, Button, Table, Select } from "antd";

const { Option } = Select;

const BookSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState("title"); // 기본 검색 필드는 제목(title)
  const dispatch = useDispatch();
  const { bookSearch } = useSelector((state) => state.bookSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return; // 빈 값이면 검색 실행 안 함

    const searchParams = { searchField, searchValue };
    dispatch(fetchBookSearchThunk(searchParams));
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Author", dataIndex: "author", key: "author" },
    { title: "Publisher", dataIndex: "publisher", key: "publisher" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
  ];

  return (
    <div>
      <Select
        value={searchField}
        onChange={(value) => setSearchField(value)}
        style={{ width: 150, marginRight: 10 }}
      >
        <Option value="title">Title</Option>
        <Option value="author">Author</Option>
        <Option value="publisher">Publisher</Option>
        <Option value="price">Price (Above)</Option>
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
        dataSource={bookSearch}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default BookSearch;
