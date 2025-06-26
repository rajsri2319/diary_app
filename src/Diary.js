// src/Diary.js
import React, { useState, useEffect } from "react";
import Home from "./Home"; // Import the Home component
import "./Diary.css"; // Import the combined Diary.css

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: "", content: "" });
  const [notification, setNotification] = useState("");

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    const storedEntries = JSON.parse(
      localStorage.getItem("diaryEntries") || "[]"
    );
    setEntries(storedEntries);
  };

  const handleInputChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const addEntry = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    const updatedEntries = [...entries, { ...newEntry, timestamp }];
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
    setNewEntry({ title: "", content: "" });
    fetchEntries(); // Refresh the entries
    setNotification("Entry added successfully!");
    setTimeout(() => setNotification(""), 3000);
  };

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter((entry, index) => index !== id);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));
    fetchEntries(); // Refresh the entries
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <div className="diary-container">
      <h2>Your Diary Entries</h2>
      <button onClick={logout} className="logout-button">
        Logout
      </button>
      <Home
        addEntry={addEntry}
        handleInputChange={handleInputChange}
        newEntry={newEntry}
      />
      {notification && <div className="notification">{notification}</div>}
      <div>
        {entries.map((entry, index) => (
          <div key={index}>
            <h3>{entry.title}</h3>
            <p>{entry.content}</p>
            <button onClick={() => deleteEntry(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
