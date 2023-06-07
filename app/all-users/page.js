'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fetchData from '../fetching/fetch';

export default function About() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
        setFilteredData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!keyword) {
      setFilteredData(data);
    } else {
      const filteredResults = data.filter((user) =>
        user.username.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredData(filteredResults);
    }
  }, [keyword, data]);

  return (
    <div className="w-96">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search users ..."
        className="border-2 border-slate-200 rounded outline-none p-1 pl-2 focus-within:border-slate-600 flex w-full"
      />
      {filteredData.length ? (
        <ul className="text-blue-800 flex gap-2 flex-wrap justify-between  ">
          {filteredData.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer flex mt-2 mb-2 rounded border-2 border-slate-300 bg-slate-200 hover:border-slate-500 focus-within:border-slate-900"
            >
              <Link href={user.username} className="p-2 w-full">{user.username}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching users found!</p>
      )}
    </div>
  );
}

