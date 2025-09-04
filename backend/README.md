# Diary App Backend

## Overview

This is the backend service for the Diary App, built with Flask. It provides RESTful API endpoints for user authentication and diary entry management.

## Features

- User registration and login with JWT-based authentication.
- CRUD operations for diary entries.
- Secure handling of user data.
- Cross-Origin Resource Sharing (CORS) enabled for frontend integration.

## Technologies

- Python 3.x
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- Flask-JWT-Extended

## Setup Instructions

1. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
Install dependencies:

bash

Run
Copy code
pip install -r requirements.txt
Run the application:

bash

Run
Copy code
python app.py
API Endpoints
POST /api/register - Register a new user.
POST /api/login - Authenticate user and receive JWT token.
POST /api/entries - Add a new diary entry.
GET /api/entries - Retrieve all diary entries for the authenticated user.
DELETE /api/entries/<entry_id> - Delete a specific diary entry.
Notes
Ensure the backend is running before starting the frontend.
Configure environment variables or config files as needed for secret keys.
License
MIT License


Run
Copy code

---

### 3. `README.md` for Frontend Folder

```markdown
# Diary App Frontend

## Overview

This is the frontend React application for the Diary App. It provides a user-friendly interface for managing diary entries and user authentication.

## Features

- User registration and login.
- Add, view, and delete diary entries.
- Responsive design for desktop and mobile.
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
The app will be available at http://localhost:3000.

Notes
Make sure the backend server is running and accessible.
Update API endpoint URLs in the frontend code if backend runs on a different host or port.
License
MIT License


Run
Copy code

---
