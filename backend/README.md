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

### 1. Create and activate a virtual environment:

   ```
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate

   
### 2. Install dependencies:

   ```
   pip install -r requirements.txt the application:
   python app.py


### 3. API Endpoints:

- POST /api/register - Register a new user.
- POST /api/login - Authenticate user and receive JWT token.
- POST /api/entries - Add a new diary entry.
- GET /api/entries - Retrieve all diary entries for the authenticated user.
- DELETE /api/entries/<entry_id> - Delete a specific diary entry.

### 4. Notes:

- Ensure the backend is ning before starting the frontend.
- Configure environment variables or config files as needed for secret keys.



---
