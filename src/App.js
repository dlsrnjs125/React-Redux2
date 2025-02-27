// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Book from "./pages/Book";
import Order from "./pages/Order";
import Navbar from './components/Navbar';



function App() {

  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* 상단 네비게이션 */}
        <Navbar />

        {/* 메인 콘텐츠 영역 */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/users/" element={<User />} />
            <Route path="/books/" element={<Book />} />
            <Route path="/orders/" element={<Order />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
