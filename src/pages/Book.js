import React, { useState } from "react";
import { Modal, Button } from "antd";
import BookList from "../components/BookList";
import BookCreate from "../components/BookCreate";
import BookSearch from "../components/BookSearch";
import BookDelete from "../components/BookDelete";

const Book = () => {
  const [isCreateModalVisible, setCreateModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const showCreateModal = () => setCreateModalVisible(true);
  const showSearchModal = () => setSearchModalVisible(true);
  const showDeleteModal = () => setDeleteModalVisible(true);

  const handleCreateCancel = () => setCreateModalVisible(false);
  const handleSearchCancel = () => setSearchModalVisible(false);
  const handleDeleteCancel = () => setDeleteModalVisible(false);

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
        <Button type="danger" onClick={showDeleteModal}style={{ marginRight: 16 }}>
          Delete Book
        </Button>
      </div>

      {/* UserList를 가운데 정렬 */}
        <BookList />
      </div>

      {/* BookCreate 모달 */}
      <BookCreate
          isOpen={isCreateModalVisible}
          onRequestClose={handleCreateCancel}
          footer={null}
          width={600}
        />

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

        {/* UserDelete 모달 */}
        <BookDelete
          isOpen={isDeleteModalVisible}
          onRequestClose={handleDeleteCancel}
          footer={null}
          width={600}
        />

      </div>
    </>
  );
};

export default Book;