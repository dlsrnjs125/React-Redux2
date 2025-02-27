import React from "react";
import BookList from "../components/BookList";

const Book = () => {
  return (
    <>
    <h2 className="text-center mt-4">Book Page</h2>
    <div className="mt-auto p-6 bg-gray-100">
      <BookList/>
    </div>
    </>
  );
};

export default Book;