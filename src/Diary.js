// Diary.js
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Home from "./Home"; // Import the Home component
import "./Diary.css"; // Import the combined Diary.css

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: "", content: "" });
  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editedEntry, setEditedEntry] = useState({ title: "", content: "" });
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

  const fetchEntries = useCallback(async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3001/api/diaries", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setEntries(data);
    } catch (error) {
      console.error("Failed to fetch entries:", error);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchEntries();
    }
  }, [navigate, fetchEntries]);

  const handleInputChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const handleEditInputChange = (e) => {
    setEditedEntry({ ...editedEntry, [e.target.name]: e.target.value });
  };

  const addEntry = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const timestamp = new Date().toLocaleString();
    try {
      const response = await fetch("http://localhost:3001/api/diaries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...newEntry, timestamp }),
      });

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setEntries((prevEntries) => [data, ...prevEntries]);
      setNotification("Entry added successfully!");
      setTimeout(() => setNotification(""), 3000);
      setNewEntry({ title: "", content: "" });
    } catch (error) {
      console.error("Failed to add entry:", error);
      setNotification("Failed to add entry. Please try again.");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const startEditing = (id, title, content) => {
    setEditingEntryId(id);
    setEditedEntry({ title, content });
  };

  const updateEntry = async (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://localhost:3001/api/diaries/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editedEntry),
      });

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedEntry = await response.json();
      setEntries((prevEntries) =>
        prevEntries.map((entry) => (entry._id === id ? updatedEntry : entry))
      );
      setEditingEntryId(null);
    } catch (error) {
      console.error("Failed to update entry:", error);
      setNotification("Failed to update entry. Please try again.");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  const deleteEntry = async (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        const response = await fetch(
          `http://localhost:3001/api/diaries/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          const errorData = await response.json();
          console.error("Error data:", errorData);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setEntries((prevEntries) =>
          prevEntries.filter((entry) => entry._id !== id)
        );
      } catch (error) {
        console.error("Failed to delete entry:", error);
        setNotification("Failed to delete entry. Please try again.");
        setTimeout(() => setNotification(""), 3000);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToHome = () => {
    setIsHome(true);
  };

  const renderEntriesPage = () => {
    return (
      <div className="entries-page">
        <h2>All Entries</h2>
        <div className="entries-visualization">
          {entries.map((entry) => (
            <div key={entry._id} className="entry-rectangle"></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="diary-container">
      <div className="home-button-container">
        <button onClick={goToHome}>Home</button>
      </div>
      {isHome ? (
        <Home
          addEntry={addEntry}
          handleInputChange={handleInputChange}
          newEntry={newEntry}
        />
      ) : (
        renderEntriesPage()
      )}
      {notification && <div className="notification">{notification}</div>}
      <div className="logout-container">
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Diary;
