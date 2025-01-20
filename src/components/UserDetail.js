// src/components/UserDetail.js
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const UserDetail = () => {
  const { userId } = useParams();
  const { users } = useContext(UserContext);
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetail = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      setUserDetail(response.data);
    };
    if (!users.find(user => user.id === parseInt(userId))) {
      fetchUserDetail();
    } else {
      setUserDetail(users.find(user => user.id === parseInt(userId)));
    }
  }, [userId, users]);

  if (!userDetail) return <p>Loading...</p>;

  return (
    <div>
      <h2>{userDetail.name}</h2>
      <p>Email: {userDetail.email}</p>
      <p>Phone: {userDetail.phone}</p>
      <p>Company: {userDetail.company.name}</p>
      <p>Website: {userDetail.website}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default UserDetail;
