import React, { useState } from 'react'; // 🔥 useState 추가
import {useDispatch} from 'react-redux';
import { fetchUserCreateThunk } from '../slice/apiSlices';


const UserCreate = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData, // ...(spread 연산자) 기존 formData 객체 복사
            [name]: value,
        }));
        // setFormData((formData) => ({ ... })) == 콜백 함수 사용

        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUserCreateThunk(formData));
        setFormData({ name: "", email: "", age: "" }); // 입력값 초기화
        };

  return (
    <div>
      <h2>User Create</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserCreate