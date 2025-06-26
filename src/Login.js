// src/Login.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      navigate("/diary"); // Redirect to diary if already logged in
    }
  }, [navigate, setIsLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = storedUsers.find(user => user.username === email && user.password === password);

    if (user) {
      const token = "your_jwt_token_here"; // Simulate token generation
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      navigate("/diary");
    } else {
      setError("Invalid credentials");
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <div className="login-upper-portion">
        <h2>Welcome Here</h2>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          {error && <p className="error-message" style={{ color: "white" }}>{error}</p>}
        </form>
      </div>
      <div className="register-link">
        Don't have an account? <button onClick={goToRegister}>Register</button>
      </div>
    </div>
  );
};

export default Login;
