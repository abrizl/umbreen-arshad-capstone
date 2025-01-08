# Project Title
Milkotov

## Overview

Milkotov is a dairy business that delivers fresh milk to its clients twice daily (in the am and the pm). 

### Problem Space

Milk is obtained through pre-packaged boxes or through daily deliveries in Pakistan. However, over the last few years, it has become apparent that both the packaged and fresh milk are not in their original state and are usually tampered with. Milkotov aims to delivery authentic whole milk that has not been tampered with.  

### User Profile

- Potential customers:
    - Can learn about the brand 
    - Obtain information about delivery 
    - Register as a client

- Existing customers: 
    -create/log-in to their account to schedule deliveries, review their past deliveries, place deliveries on hold etc. 
    

### Features

User Authentication: 
- Register, log in, and log out functionality.
- Passwords stored securely with hashing (using bcrypt).

Delivery Management: 
- Schedule milk deliveries for morning or evening slots. 
- Pause or resume deliveries as needed. 
- View delivery history and subscription details.

Informational Pages:
- Landing page with hero image and brand overview.
- "About Us" page sharing the story and mission of Milkotov.
- "Contact Us" page with a contact form for inquiries.


## Implementation

### Tech Stack

React
Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

Frontend (Client):
- React for building a dynamic and interactive UI.
- React Router for navigation and multi-page functionality.
- Axios for API requests to the backend.

Backend (Server):
- Node.js with Express for building RESTful APIs.
- Knex.js as an SQL query builder for database interactions.
- bcrypt for securely hashing user passwords.

Database:
- MySQL for storing user data, delivery schedules, and order history.

### APIs

- No external APIs will be used for the first sprint

### Sitemap

Landing page: will have a hero image and will provide the users with some details about the brand

Schedule a Delivery: shows a list of available delivery locations, then sorts to available delivery time slots

About us: will share information about the history of the brand 

Contact us: allow users to fill out a form to send their contact details 

Register page
Login page

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

1. Users
Description: Represents customers of Milkotov who can log in, manage their accounts, and schedule deliveries.
Fields:
-id (Primary Key): Unique identifier for each user.
-name: Name of the user.
-email: User's email for login and communication.
-password_hash: Encrypted password for authentication.
-address: Delivery address provided by the user.
-phone_number: Optional field for contact purposes.

2. Locations
Description: Represents delivery areas where Milkotov provides its services.
Fields:
-id (Primary Key): Unique identifier for each location.
-name: Name of the delivery location (e.g., "Karachi, DHA Phase 2").
Relationships:
Each delivery location is associated with multiple time slots.

3. Time Slots
Description: Represents available delivery time windows for each location.
Fields:
-id (Primary Key): Unique identifier for each time slot.
-label: AM or PM to indicate the time of day.
-start_time: Start time of the time slot.
-end_time: End time of the time slot.
-location_id (Foreign Key): Links the time slot to a specific location.
Relationships:
Each time slot belongs to one location but can be selected by multiple users for their deliveries.

4. Deliveries
Description: Represents scheduled deliveries for users.
Fields:
-id (Primary Key): Unique identifier for each delivery.
-user_id (Foreign Key): Links the delivery to a specific user.
-location_id (Foreign Key): Links the delivery to a specific location.
-timeslot_id (Foreign Key): Links the delivery to a specific time slot.
-address: Address for this specific delivery (can override the default user address).
-date: Date for the scheduled delivery.
-status: Current status of the delivery (e.g., "Scheduled," "Paused," "Delivered").
Relationships:
Each delivery is tied to one user, one location, and one time slot.

5. Contact Inquiries
Description: Represents inquiries submitted by users or potential customers via the contact form.
Fields:
-id (Primary Key): Unique identifier for each inquiry.
-name: Name of the inquirer.
-email: Email address for follow-up.
-message: Message content from the user.
-submitted_at: Timestamp for when the inquiry was submitted.

Users ↔ Deliveries:
    One user can have multiple deliveries (one-to-many).
Locations ↔ Time Slots:
    One location can have multiple time slots (one-to-many).
Time Slots ↔ Deliveries:
    One time slot can be associated with multiple deliveries (one-to-many).
Users ↔ Contact Inquiries:
    One user can submit multiple inquiries, but each inquiry is independent (one-to-many).


### Endpoints

Schedule A Delivery:

**GET /deliveries/locations**
Fetch the list of available delivery locations.

Response: [
  { "id": 1, "name": "Karachi, DHA Phase 2" },
  { "id": 2, "name": "Karachi, Gulshan-e-Iqbal" },
  { "id": 3, "name": "Lahore, Model Town" }
]

**GET /deliveries/locations/timeslots**
Fetch the list of available delivery locations.

Response: 
{
  "id": 1,
  "name": "Karachi, DHA Phase 2",
  "timeslots": [
    {
      "id": 1,
      "label": "AM",
      "start_time": "07:30",
      "end_time": "09:30"
    },
    {
      "id": 2,
      "label": "PM",
      "start_time": "18:30",
      "end_time": "21:30"
    }
  ]
}

**POST /deliveries/schedule**
Once the user selects the location and timeslot, they can enter their address information and submit it. 

Request:

{
  "user_id": 123,
  "location_id": 1,
  "timeslot_id": 1,
  "address": "123 Main Street, Karachi, DHA Phase 2",
  "date": "2025-01-08"
}

Response: 
{
  "message": "Delivery scheduled successfully!",
  "delivery_id": 456
}

**POST /user/register**
Creates a new user account.

Request: { "email": "user@example.com", "password": "123456", "name": "John Doe" }
Response: { "message": "User registered successfully!" }

**POST /user/login**
Authenticates a user.

Request: { "email": "user@example.com", "password": "123456" }
Response: { "token": "jwt-token", "userId": 1 }

User Profile:
**GET /user**
Retrieves user details (requires authentication).

**PUT /user**
Updates user profile information (e.g., address, name).

Delivery Management:
**GET /user/deliveries**
Retrieves the user’s delivery history.
POST /api/deliveries
Schedules a new delivery (morning or evening slot).
json

Request: { "date": "2025-01-10", "timeSlot": "AM" }
Response: { "message": "Delivery scheduled successfully!" }

**PATCH /user/deliveries/:id/pause**
Pauses or resumes a delivery.


Contact Us:
**POST /contact**
Submits user inquiries via the contact form.

## Roadmap

Sprint 1:

Create Client
   Initialize React project with routes and boilerplate pages.

Create Server
    Initialize Express project with routing and placeholder 200 OK responses.

Create Migrations
    Design and implement database migrations for users, locations, timeslots, and deliveries.

Seed Database
    Gather sample delivery locations and timeslots for two cities.
    Create seed data for the database.

Deploy Projects
    Deploy React client and Express server with auto-deployment on commits.

Feature: List Delivery Locations
    Implement delivery locations page with dropdown to select location.
    Store selected location in sessionStorage.
    Create GET /deliveries/locations endpoint.

Feature: View Timeslots
    Implement page to display available timeslots for selected location.
    Create GET /deliveries/locations/:id/timeslots endpoint.

Feature: Schedule Delivery
    Add form to select location, timeslot, and address.
    Create POST /deliveries/schedule endpoint.

Feature: Delivery History
    Implement page to list past deliveries.
    Create GET /user/deliveries endpoint.

Feature: Create Account
    Implement register page with form.
    Create POST /users/register endpoint.

Feature: Login
    Implement login page with form.
    Create POST /users/login endpoint.

Feature: Implement JWT Tokens
    Server: Protect endpoints with JWT middleware.
    Client: Store JWT in localStorage and include in Axios calls.

Bug Fixes and Testing
    Test and debug all features in development and production environments.

---

## Future Implementations
- Subscription payments integration.
- Real-time delivery tracking (e.g., when the delivery is on its way).
- Push notifications or email reminders for upcoming deliveries.
- Feedback and reviews from customers for continuous improvement.

