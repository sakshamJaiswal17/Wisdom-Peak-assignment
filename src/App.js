// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <ThemeToggle /> {/* Add the Theme Toggle Button */}
        <div className="container">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:userId" element={<UserDetail />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
