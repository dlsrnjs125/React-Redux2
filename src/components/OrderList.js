import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderSlice } from '../slice/apiSlices'; 

const OrderList = () => {
    const [orderData, setOrderData] = useState([]);
    const dispatch = useDispatch(); // slice 함수 api 실행
    const { orders, loading } = useSelector((state) => state.orderList);     


    useEffect(() => {
        dispatch(orderSlice());
    }, [dispatch]);

    useEffect(() => {
        setOrderData(orders);
    }, [orders]);

    if (loading) {
    return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Order List</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Book</th>
                    <th>Address</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {orderData?.map((order) => (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.user_id}</td>
                        <td>{order.book_id}</td>
                        <td>{order.address}</td>
                        <td>{order.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

    );
}

export default OrderList;