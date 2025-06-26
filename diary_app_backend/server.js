const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Dummy user data for demonstration
const users = [
  { email: "test@example.com", password: "password" }, // Replace with your own logic
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    // Simulate a successful login
    res.json({ token: "your_jwt_token_here" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
