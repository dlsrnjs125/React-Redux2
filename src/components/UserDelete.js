import React, { useState } from "react"; // 🔥 useState 추가
import { useDispatch } from "react-redux";
import { fetchUserDeleteThunk } from "../slice/apiSlices";

const UserDelete = () => {
  const [userId, setUserId] = useState(""); // 삭제할 사용자 ID 입력 필드
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserId(e.target.value); // 입력값에 따라 userId 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userId) {
      alert("사용자 ID를 입력해주세요.");
      return;
    }

    // 삭제 API 호출
    dispatch(fetchUserDeleteThunk(userId))
      .then(() => {
        alert("사용자가 삭제되었습니다.");
        setUserId(""); // 입력값 초기화
      })
      .catch((error) => {
        alert(`삭제 실패: ${error.message}`);
      });
  };

  return (
    <div>
      <h2>User Delete</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="Enter User ID to delete"
          value={userId}
          onChange={handleChange}
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default UserDelete;
