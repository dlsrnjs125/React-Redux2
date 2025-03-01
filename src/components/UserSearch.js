import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSearchThunk } from "../slice/apiSlices";
import { Input, Button, Table } from "antd";

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { userSearch } = useSelector((state) => state.userSearch);

  const handleSubmit = (e) => {
    e.preventDefault();

    let searchField = "";
    if (/^\d+$/.test(searchValue)) {
      searchField = "age";
    } else {
      searchField = "name";
    }

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
      <Input
        type="text"
        placeholder="Search by name or age"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={handleSubmit}
        style={{ marginBottom: 20 }}
      />
      <Button onClick={handleSubmit} type="primary">
        Search
      </Button>

      <Table
        dataSource={userSearch}
        columns={columns}
        rowKey="id"
        paginationPageSize={10} // 페이지 크기를 10개로 설정
        style={{ marginTop: 20 }}
      />
    </div>
  );
};

export default UserSearch;
