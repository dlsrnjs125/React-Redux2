import React from "react";
import UserCreate from "../components/UserCreate";
import UserList from "../components/UserList";

const User = () => {
  return (
    <>
    <h2 className="text-center mt-4">User Page</h2>
    <div className="mt-auto p-6 bg-gray-100">
      <UserList/>
      <UserCreate />
    </div>
    </>
  );
};

export default User;
