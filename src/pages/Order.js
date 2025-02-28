import React from "react";
import OrderList from "../components/OrderList";

const Order = () => {
  return (
    <>
    <h2 className="text-center mt-4">Order Page</h2>
    <div className="mt-auto p-6 bg-gray-100">
      <OrderList/>
    </div>
    </>
  );
};

export default Order;
