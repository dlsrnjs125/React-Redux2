import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBookDeleteThunk } from "../slice/apiSlices";
import { Modal, Input, Button, message } from "antd"; // antd의 Modal과 message 사용

const BookDelete = ({ isOpen, onRequestClose }) => {
  const [bookId, setBookId] = useState(""); // 삭제할 책 ID 입력 필드
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBookId(e.target.value); // 입력값에 따라 bookId 업데이트
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookId) {
      message.error("책 ID를 입력해주세요.");
      return;
    }

    try {
      // 삭제 API 호출
      const resultAction = await dispatch(fetchBookDeleteThunk(bookId));

      if (fetchBookDeleteThunk.fulfilled.match(resultAction)) {
        message.success("책이 삭제되었습니다.");
        setBookId(""); // 입력값 초기화
        onRequestClose(); // 모달 닫기
      } else {
        message.error("책 삭제 실패.");
      }
    } catch (error) {
      message.error(`삭제 실패: ${error.message}`);
    }
  };

  return (
    <Modal
      title="Delete Book"
      visible={isOpen}
      onCancel={onRequestClose}
      footer={null}
      width={600}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="bookId"
          placeholder="Enter Book ID to delete"
          value={bookId}
          onChange={handleChange}
          required
          style={{ marginBottom: 16 }}
        />
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          Delete
        </Button>
        <Button type="default" onClick={onRequestClose}>
          Cancel
        </Button>
      </form>
    </Modal>
  );
};

export default BookDelete;