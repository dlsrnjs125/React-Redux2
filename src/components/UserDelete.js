import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDeleteThunk } from "../slice/apiSlices";
import { Modal, Input, Button, message } from "antd"; // antd의 Modal과 message 사용

const UserDelete = ({ isOpen, onRequestClose }) => {
  const [userId, setUserId] = useState(""); // 삭제할 사용자 ID 입력 필드
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserId(e.target.value); // 입력값에 따라 userId 업데이트
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      message.error("사용자 ID를 입력해주세요.");
      return;
    }

    try {
      // 삭제 API 호출
      const resultAction = await dispatch(fetchUserDeleteThunk(userId));

      if (fetchUserDeleteThunk.fulfilled.match(resultAction)) {
        message.success("사용자가 삭제되었습니다.");
        setUserId(""); // 입력값 초기화
        onRequestClose(); // 모달 닫기
      } else {
        message.error("사용자 삭제 실패.");
      }
    } catch (error) {
      message.error(`삭제 실패: ${error.message}`);
    }
  };

  return (
    <Modal
      title="Delete User"
      visible={isOpen}
      onCancel={onRequestClose}
      footer={null}
      width={600}
    >
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="userId"
          placeholder="Enter User ID to delete"
          value={userId}
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

export default UserDelete;
