// src/components/SearchBar.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(UserContext);

  return (
    <input
      type="text"
      placeholder="Search users by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
