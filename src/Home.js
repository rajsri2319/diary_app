// src/Home.js
import React from "react";
import "./Diary.css"; // Import the combined Diary.css

const Home = ({ addEntry, handleInputChange, newEntry }) => {
  return (
    <div className="diary-home">
      <div className="diary-widgets">
        <div className="widget">
          <h3>Quick Add</h3>
          <form onSubmit={addEntry}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newEntry.title}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="content"
              placeholder="Content"
              value={newEntry.content}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
