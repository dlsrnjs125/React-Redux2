import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserSearchThunk } from '../slice/apiSlices';

const UserSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { userSearch } = useSelector((state) => state.userSearch);

  // 숫자 형식 검사 (나이)
  const isNumber = (value) => /^\d+$/.test(value);

  // 검색 기준에 맞는 필드로 검색
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let searchField = '';
    if (isNumber(searchValue)) {
      searchField = 'age';
    } else {
      searchField = 'name';
    }

    // 해당 필드로 검색
    const searchParams = { searchField, searchValue };
    dispatch(fetchUserSearchThunk(searchParams));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h2>User Search</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Search for"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mb-4 w-full"
        />
        <button type="submit" className="w-full">
          Search
        </button>
      </form>

      {/* 검색된 데이터가 여러 개인 경우 테이블로 출력 */}
      {userSearch && userSearch.length > 0 && (
        <table className="min-w-full table-auto mt-4 border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {userSearch.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserSearch;
