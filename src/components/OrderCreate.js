import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchBooks, fetchOrderCreateThunk } from '../slice/apiSlices';
import { Modal, Input, Button, Form, Select, message, Spin } from "antd";
import { ModuleRegistry } from 'ag-grid-community';
import { TextFilterModule, NumberFilterModule, DateFilterModule, CustomFilterModule, ColumnAutoSizeModule } from 'ag-grid-community';
import { SetFilterModule, MultiFilterModule, GroupFilterModule } from 'ag-grid-enterprise';

// ColumnAutoSizeModule을 등록합니다.
ModuleRegistry.registerModules([ColumnAutoSizeModule]);

// 필요한 모듈들을 등록합니다.
ModuleRegistry.registerModules([
  TextFilterModule,
  NumberFilterModule,
  DateFilterModule,
  SetFilterModule,
  MultiFilterModule,
  GroupFilterModule,
  CustomFilterModule
]);

const { Option } = Select;

const OrderCreate = ({ isOpen, onRequestClose }) => {
    const dispatch = useDispatch();

    // Redux에서 state 받아오기
    const users = useSelector(state => state.orderCreate.users || []);
    const books = useSelector(state => state.orderCreate.books || []);
    const isLoadingUsers = useSelector(state => state.orderCreate.loading || false);
    const isLoadingBooks = useSelector(state => state.orderCreate.loading || false);
    const error = useSelector(state => state.orderCreate.error);

    // Local state for quantity and total_price
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        if (!users.length) dispatch(fetchUsers());
        if (!books.length) dispatch(fetchBooks());
    }, [dispatch, users.length, books.length]);

    const [form] = Form.useForm();

    // Handle quantity change and update total price
    const handleQuantityChange = (value) => {
        setQuantity(value);
        if (selectedBook) {
            setTotalPrice(selectedBook.price * value);
        }
    };

    // Handle book selection and update total price
    const handleBookChange = (value) => {
        const selected = books.find(book => book.id === value);
        setSelectedBook(selected);
        if (selected) {
            setTotalPrice(selected.price * quantity);
        }
    };

    const handleSubmit = async (values) => {
        try {
            // 보내는 데이터를 콘솔에 출력
            const orderData = {
                user_id: values.user,  // 수정
                book_id: values.book,  // 수정
                quantity: quantity,
                total_price: totalPrice,
                address: values.address,
                created_at: new Date().toISOString()
            };
    
            console.log('Sending order data:', orderData);  // 이 줄을 추가하여 데이터를 확인
    
            const resultAction = await dispatch(fetchOrderCreateThunk(orderData));
    
            if (fetchOrderCreateThunk.fulfilled.match(resultAction)) {
                message.success("Order created successfully!");
                form.resetFields();
                onRequestClose();
            } else {
                message.error("Failed to create order.");
            }
        } catch (error) {
            message.error("An error occurred while creating the order.");
        }
    };

    return (
        <Modal
            title="Create Order"
            visible={isOpen}
            onCancel={onRequestClose}
            footer={null}
            width={600}
        >
            <Form
                form={form}
                name="order_create_form"
                onFinish={handleSubmit}
                layout="vertical"
                initialValues={{ quantity: 1 }}
            >
                {/* User Selection */}
                <Form.Item label="User" name="user" rules={[{ required: true, message: "Please select a user!" }]}>
                    {isLoadingUsers ? <Spin /> : (
                        <Select placeholder="Select a user">
                            {users.map(user => (
                                <Option key={user.id} value={user.id}>{user.name}</Option>
                            ))}
                        </Select>
                    )}
                </Form.Item>

                {/* Book Selection */}
                <Form.Item label="Book" name="book" rules={[{ required: true, message: "Please select a book!" }]}>
                    {isLoadingBooks ? <Spin /> : (
                        <Select
                            placeholder="Select a book"
                            onChange={handleBookChange}
                        >
                            {books.map(book => (
                                <Option key={book.id} value={book.id}>{book.title}</Option>
                            ))}
                        </Select>
                    )}
                </Form.Item>

                {/* Quantity Input */}
                <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: "Please input quantity!" }]}>
                    <Input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => handleQuantityChange(Number(e.target.value))}
                    />
                </Form.Item>

                {/* Address Input */}
                <Form.Item label="Address" name="address" rules={[{ required: true, message: "Please enter the address!" }]}>
                    <Input placeholder="Enter delivery address" />
                </Form.Item>

                {/* Total Price Display */}
                <Form.Item label="Total Price">
                    <Input value={totalPrice} disabled />
                </Form.Item>

                {/* Error Display */}
                {error && <div style={{ color: 'red' }}>{error}</div>}

                {/* Submit and Cancel Buttons */}
                <Button type="primary" htmlType="submit" style={{ marginRight: 8 }} disabled={isLoadingUsers || isLoadingBooks}>
                    Submit
                </Button>
                <Button type="default" onClick={onRequestClose}>
                    Cancel
                </Button>
            </Form>
        </Modal>
    );
};

export default OrderCreate;
