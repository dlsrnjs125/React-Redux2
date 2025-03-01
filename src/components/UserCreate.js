import React, { useState } from 'react'; // 🔥 useState 추가
import {useDispatch} from 'react-redux';
import { fetchUserCreateThunk } from '../slice/apiSlices';
import { Input, Button, Form, message } from "antd"; // antd의 message 추가


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

    const handleSubmit = async (values) => {
      // 비동기 방식으로 form 제출
      try {
        // Redux dispatch
        const resultAction = await dispatch(fetchUserCreateThunk(values));
        
        if (fetchUserCreateThunk.fulfilled.match(resultAction)) {
          message.success("User created successfully!");
          setFormData({ name: "", email: "", age: "" }); // 입력값 초기화
        } else {
          message.error("Failed to create user.");
        }
      } catch (error) {
        message.error("An error occurred while creating the user.");
      }
    };

  return (
    <div>
      <Form
        name="user_create_form"
        onFinish={handleSubmit} // onFinish로 처리
        initialValues={formData} // initialValues로 초기값 설정
        layout="vertical" // 레이아웃을 수직으로 설정
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the user's name!" }]} // 필수 입력 검증
        >
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: "Please input a valid email!" }]} // 이메일 형식 검증
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input the user's age!" }]} // 필수 입력 검증
        >
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserCreate