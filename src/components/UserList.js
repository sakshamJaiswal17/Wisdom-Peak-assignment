// src/components/UserList.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import "./UserList.css";

const UserList = () => {
  const { users, loading, error, setSortOrder } = useContext(UserContext);

  return (
    <div>
        <SearchBar />
        <button onClick={() => setSortOrder("asc")}>Sort A-Z</button>
        <button onClick={() => setSortOrder("desc")}>Sort Z-A</button>
      

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="list-item-css" >
                <Link to={`/user/${user.id}`}>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.address.city}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default UserList;
