
# Ticket Management System

This is a simple RESTful API for a Ticket Management System built using **Node.js**, **Express**, and **MongoDB**. The system allows users to create, read, update, and delete tickets.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)

---

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd ticket-management
    ```

2. **Install dependencies**:
    Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your system.

    ```bash
    npm install
    ```

3. **Set up MongoDB**:
    - Ensure MongoDB is running on your local machine. The API will connect to a local MongoDB instance at:
      ```
      mongodb://127.0.0.1:27017/ticket-management
      ```

4. **Run the application**:
    Start the server with the following command:

    ```bash
    npm start
    ```

    The server should now be running at `http://localhost:3000`.

---

## Usage

This application provides a RESTful API for managing tickets. You can use **Postman** or **cURL** to interact with the API.

- All the routes are prefixed with `/api/tickets`.
- Each ticket has the following fields:
    - `title`: The title of the ticket (required).
    - `description`: A detailed description of the issue (required).
    - `status`: Status of the ticket, can be 'open', 'in-progress', or 'closed'. Default is 'open'.
    - `createdAt`: Timestamp of when the ticket was created (auto-generated).

---

## API Endpoints

### Create a Ticket
- **Endpoint**: `POST /api/tickets`
- **Description**: Creates a new ticket.
- **Body Parameters**:
  - `title` (string, required)
  - `description` (string, required)

- **Response**:
    ```json
    {
      "_id": "60a770f49784004a22f68f4d",
      "title": "Issue with login",
      "description": "Unable to log in using my credentials",
      "status": "open",
      "createdAt": "2021-05-20T07:52:52.418Z",
      "__v": 0
    }
    ```

### Get All Tickets
- **Endpoint**: `GET /api/tickets`
- **Description**: Fetches all the tickets in the system.
- **Example Request**:
    ```bash
    GET http://localhost:3000/api/tickets
    ```

### Get a Ticket by ID
- **Endpoint**: `GET /api/tickets/:id`
- **Description**: Fetches a single ticket by its ID.
- **Example Request**:
    ```bash
    GET http://localhost:3000/api/tickets/60a770f49784004a22f68f4d
    ```

### Update a Ticket
- **Endpoint**: `PATCH /api/tickets/:id`
- **Description**: Updates the specified fields of a ticket.
- **Body Parameters**:
  - Any updatable field like `title`, `description`, or `status`.
- **Example Request**:
    ```bash
    PATCH http://localhost:3000/api/tickets/60a770f49784004a22f68f4d
    Content-Type: application/json

    {
      "status": "in-progress"
    }
    ```

### Delete a Ticket
- **Endpoint**: `DELETE /api/tickets/:id`
- **Description**: Deletes a ticket by its ID.
- **Example Request**:
    ```bash
    DELETE http://localhost:3000/api/tickets/60a770f49784004a22f68f4d
    ```

---

## Error Handling

The API uses standard HTTP status codes to indicate errors:

- **400**: Bad Request – Invalid data sent in the request.
- **404**: Not Found – Ticket not found for the given ID.
- **500**: Internal Server Error – Something went wrong on the server.

---
