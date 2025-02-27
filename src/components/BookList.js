import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookSlice } from '../slice/apiSlices';


const BookList = () => {
    const [bookData, setBookData] = useState([]);
    const dispatch = useDispatch(); // slice 함수 api 실행
    const { books, loading } = useSelector((state) => state.bookList);     

    useEffect(() => {
        dispatch(bookSlice());
    }, [dispatch]);

    useEffect(() => {
        setBookData(books);
    }, [books]);

    if (loading) {
    return <p>Loading...</p>;
    }
    

    return (
        <div>
            <h2>Book List</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {bookData?.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                        <td>{book.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

    );
}

export default BookList;