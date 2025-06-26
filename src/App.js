// src/App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Diary from "./Diary";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set logged in state based on token presence
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
        </header>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/diary" />
              )
            }
          />
          <Route
            path="/diary"
            element={isLoggedIn ? <Diary /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/diary" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
