# Diary App

## Overview

Diary App is a full-stack web application that allows users to maintain a personal journal. The frontend is built with **React**, providing a responsive and user-friendly interface, while the backend is powered by **Flask**, offering secure RESTful APIs for user authentication and diary management.

## Repository Structure
diary-app/ ├── backend/ # Flask backend API ├── frontend/ # React frontend application ├── .gitignore └── README.md

## Features

- User registration and login with JWT authentication.
- Create, read, and delete diary entries.
- Responsive UI for desktop and mobile.
- Secure backend API with token-based authentication.

## Prerequisites

- Python 3.x
- Node.js and npm

## Setup Instructions

## Backend Setup

1. Navigate to the **backend** directory:
   ```
   cd backend
   
Create and activate a virtual environment:
python -m venv venv

On Linux/Mac:
source venv/bin/activate

On Windows:
venv\Scripts\activate

Install backend dependencies:
pip install -r requirements.txt

Run the backend server:
python app.py

### Frontend Setup

Navigate to the frontend directory:
cd frontend

Install frontend dependencies:
npm install

Start the frontend development server:
npm start

Open your browser and go to:
http://localhost:3000

#### Usage:

- Register a new user account
- Log in with your credentials
- Add, view, and delete diary entries
- Log out when finished

#### API Endpoints

- POST /api/register — Register a new user
- POST /api/login — Log in and receive a JWT token
- POST /api/entries — Add a new diary entry
- GET /api/entries — Retrieve all diary entries for the logged-in user
- DELETE /api/entries/<entry_id> — Delete a diary entry by ID
