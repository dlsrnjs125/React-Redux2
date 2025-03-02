import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
import BookSearch from "../components/BookSearch";

const Book = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

  const showCreateModal = () => setCreateModalVisible(true);
  const showSearchModal = () => setSearchModalVisible(true);

  const handleCreateCancel = () => setCreateModalVisible(false);
  const handleSearchCancel = () => setSearchModalVisible(false);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div style={{ width: "80%", margin: "auto" }}>
      {/* 모달 버튼들 (왼쪽 위 정렬) */}
      <div className="absolute top-5 left-5 space-x-4">
        <Button type="primary" onClick={showCreateModal} style={{ marginRight: 16 }}>
          Create Book
        </Button>
        <Button type="default" onClick={showSearchModal} style={{ marginRight: 16 }}>
          Search Book
        </Button>
      </div>

      {/* UserList를 가운데 정렬 */}
        <BookList />
      </div>

      {/* BookCreate 모달 */}
      <Modal
          title="Create Book"
          visible={isCreateModalVisible}
          onCancel={handleCreateCancel}
          footer={null}
          width={600}
        >
          <BookCreate />
        </Modal>

        {/* BookSearch 모달 */}
        <Modal
          title="Search Book"
          visible={isSearchModalVisible}
          onCancel={handleSearchCancel}
          footer={null}
          width={600}
        >
          <BookSearch/>
        </Modal>

      </div>
    </>
  );
};

export default Book;