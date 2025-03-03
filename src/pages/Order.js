import React from "react";
import OrderList from "../components/OrderList";

const Order = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div style={{ width: "80%", margin: "auto" }}>
      

      {/* UserList를 가운데 정렬 */}
        <OrderList />
      </div>
    </div>
    </>
  );
};

export default Order;
