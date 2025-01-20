// src/components/Pagination.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, usersPerPage, totalUsers } = useContext(UserContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
