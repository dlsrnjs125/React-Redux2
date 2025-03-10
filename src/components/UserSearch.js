import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSearchThunk } from "../slice/apiSlices";
import { Input, Button, Table, Select } from "antd";

const { Option } = Select;

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState("name"); // 기본 검색 필드는 name
  const dispatch = useDispatch();
  const { userSearch } = useSelector((state) => state.userSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return; // 빈 값 검색 방지

    const searchParams = { searchField, searchValue };
    dispatch(fetchUserSearchThunk(searchParams));
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Age", dataIndex: "age", key: "age" },
  ];

  return (
    <div>
      <Select
        value={searchField}
        onChange={(value) => setSearchField(value)}
        style={{ width: 150, marginRight: 10 }}
      >
        <Option value="name">Name</Option>
        <Option value="email">Email</Option>
        <Option value="age">Age (Above)</Option>
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
        dataSource={userSearch}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default UserSearch;
