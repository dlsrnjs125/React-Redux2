import React, { useState } from 'react'; // 🔥 useState 추가
import {useDispatch} from 'react-redux';
import { fetchBookCreateThunk } from '../slice/apiSlices';
import { Input, Button, Form, message } from "antd"; // antd의 message 추가


const BookCreate = () => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        publisher: "",
        price: "",
        stock: "",
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
        const resultAction = await dispatch(fetchBookCreateThunk(values));
        
        if (fetchBookCreateThunk.fulfilled.match(resultAction)) {
          message.success("Book created successfully!");
          setFormData({ name: "", email: "", age: "" }); // 입력값 초기화
        } else {
          message.error("Failed to create book.");
        }
      } catch (error) {
        message.error("An error occurred while creating the book.");
      }
    };

  return (
    <div>
      <Form
        name="book_create_form"
        onFinish={handleSubmit} // onFinish로 처리
        initialValues={formData} // initialValues로 초기값 설정
        layout="vertical" // 레이아웃을 수직으로 설정
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the book's title!" }]} // 필수 입력 검증
        >
          <Input
            type="text"
            name="title"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: "Please input a book's author!" }]} // 필수 입력 검증
        >
          <Input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Publisher"
          name="publisher"
          rules={[{ required: true, message: "Please input a book's publisher!" }]} // 필수 입력 검증
        >
          <Input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input the book's price!" }]} // 필수 입력 검증
        >
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="Stock"
          name="stock"
          rules={[{ required: true, message: "Please input the book's stock!" }]} // 필수 입력 검증
        >
          <Input
            type="number"
            name="stock"
            value={formData.stock}
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

export default BookCreate