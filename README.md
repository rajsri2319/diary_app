# Diary App

## Overview

Diary App is a full-stack web application that allows users to maintain a personal journal. The frontend is built with **React**, providing a responsive and user-friendly interface, while the backend is powered by **Flask**, offering secure RESTful APIs for user authentication and diary management.

## Repository Structure
diary-app/ ├── backend/ # Flask backend API ├── frontend/ # React frontend application ├── .gitignore └── README.md # This file


Run
Copy code

## Features

- User registration and login with JWT authentication.
- Create, read, and delete diary entries.
- Responsive UI for desktop and mobile.
- Secure backend API with token-based authentication.

## Prerequisites

- Python 3.x
- Node.js and npm

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
Create and activate a virtual environment:

   ```bash
  Run
Copy code
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install backend dependencies:

bash

Run
Copy code
pip install -r requirements.txt
Run the backend server:

bash

Run
Copy code
python app.py

### Frontend Setup

1. Navigate to the frontend directory:

bash

Run
Copy code
cd frontend

2. Install frontend dependencies:

bash

Run
Copy code
npm install

3. Start the frontend development server:

bash

Run
Copy code
npm start

4. Open your browser and go to http://localhost:3000.

### Usage

Register a new user account.
Log in with your credentials.
Add, view, and delete diary entries.
Log out when finished.

### API Endpoints
POST /api/register — Register a new user.
POST /api/login — Log in and receive a JWT token.
POST /api/entries — Add a new diary entry.
GET /api/entries — Retrieve all diary entries for the logged-in user.
DELETE /api/entries/<entry_id> — Delete a diary entry by ID.

### Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
