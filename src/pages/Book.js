import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";

const Book = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);

  const showCreateModal = () => setCreateModalVisible(true);

  const handleCreateCancel = () => setCreateModalVisible(false);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div style={{ width: "80%", margin: "auto" }}>
      {/* 모달 버튼들 (왼쪽 위 정렬) */}
      <div className="absolute top-5 left-5 space-x-4">
        <Button type="primary" onClick={showCreateModal} style={{ marginRight: 16 }}>
          Create Book
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

      </div>
    </>
  );
};

export default Book;