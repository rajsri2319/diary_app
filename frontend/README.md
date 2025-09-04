# Diary App Frontend

## Overview

This is the frontend React application for the Diary App. It provides a user-friendly interface for users to register, log in, and manage their diary entries.

## Features

- User registration and login.
- Add, view, and delete diary entries.
- Responsive design for desktop and mobile devices.
- Communicates with the backend API for data persistence.

## Technologies

- React
- React Router
- CSS

## Setup Instructions

1. Navigate to the frontend directory:

   ```bash
   cd frontend
Install dependencies:

bash

Run
Copy code
npm install
Start the development server:

bash

Run
Copy code
npm start
Open your browser and go to http://localhost:3000 to use the app.

Configuration
Ensure the backend API is running and accessible.
If the backend runs on a different URL or port, update the API base URL in the frontend source code accordingly.
License
MIT License


Run
Copy code

---

### 2. `README.md` for the **Root diary_app Repository**

```markdown
# Diary App

## Overview

Diary App is a full-stack journaling web application that allows users to securely create, view, and manage personal diary entries. The frontend is built with React, and the backend is powered by Flask.

## Repository Structure
diary-app/ ├── backend/ # Flask backend API ├── frontend/ # React frontend application ├── .gitignore └── README.md # This file


Run
Copy code

## Prerequisites

- Python 3.x
- Node.js and npm

## Setup Instructions

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
Frontend Setup
bash

Run
Copy code
cd frontend
npm install
npm start
Usage
Register a new user via the frontend interface.
Log in to access your diary.
Add, view, and delete diary entries.
Log out when finished.
Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.
