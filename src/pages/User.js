import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import UserCreate from "../components/UserCreate";
import UserList from "../components/UserList";
import UserSearch from "../components/UserSearch";
import UserDelete from "../components/UserDelete";

const User = () => {
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
            Create User
          </Button>
          <Button type="default" onClick={showSearchModal} style={{ marginRight: 16 }}>
            Search User
          </Button>
          <Button type="danger" onClick={showDeleteModal}style={{ marginRight: 16 }}>
            Delete User
          </Button>
        </div>

      {/* UserList를 가운데 정렬 */}
        <UserList />
      </div>


        {/* UserCreate 모달 */}
        <Modal
          title="Create User"
          visible={isCreateModalVisible}
          onCancel={handleCreateCancel}
          footer={null}
          width={600}
        >
          <UserCreate />
        </Modal>

        {/* UserSearch 모달 */}
        <Modal
          title="Search User"
          visible={isSearchModalVisible}
          onCancel={handleSearchCancel}
          footer={null}
          width={600}
        >
          <UserSearch/>
        </Modal>

        {/* UserDelete 모달 */}
        <UserDelete
          isOpen={isDeleteModalVisible}
          onRequestClose={handleDeleteCancel}
          footer={null}
          width={600}
        />
      </div>
    </>
  );
};

export default User;
