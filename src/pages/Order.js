import React, { useState } from "react";
import { Modal, Button } from "antd";
import OrderList from "../components/OrderList";
import OrderSearch from "../components/OrderSearch";

const Order = () => {
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

  const showSearchModal = () => setSearchModalVisible(true);

  const handleSearchCancel = () => setSearchModalVisible(false);


  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div style={{ width: "80%", margin: "auto" }}>
      {/* 모달 버튼들 (왼쪽 위 정렬) */}
      <div className="absolute top-5 left-5 space-x-4">
        <Button type="default" onClick={showSearchModal} style={{ marginRight: 16 }}>
          Search Order
        </Button>
      </div>
      

      {/* UserList를 가운데 정렬 */}
        <OrderList />
      </div>

      {/* BookSearch 모달 */}
      <Modal
          title="Search Order"
          visible={isSearchModalVisible}
          onCancel={handleSearchCancel}
          footer={null}
          width={1200}
        >
          <OrderSearch/>
        </Modal>
    </div>
    </>
  );
};

export default Order;
