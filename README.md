# Book a Doctor - Doctor Appointment Booking App

Book a Doctor is a MERN (MongoDB, Express, React, Node.js) Stack application for scheduling doctor appointments easily and efficiently. Users can browse through available doctors, check their availability, and book appointments as per their convenience.

## Table of Contents
- [About the Project](#about-the-project)
- [Code Structure & Demo Videos](#code-structure--demo-videos)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Team](#team)
- [License](#license)

---

## About the Project

This Doctor Appointment Booking System is designed to streamline the appointment scheduling process for patients and doctors. The application provides an intuitive user interface, with real-time updates on doctor availability, and an organized booking process.

### Team ID
Our team ID for this project is **NM2024TMID06548**.


## Code Structure & Demo Videos

To better understand our code structure and how the application functions, you can watch the following videos:

- **Code Structure Explanation:** [Video Link ](https://drive.google.com/drive/folders/1pteT8STdObONWwELNDHRK9biItLuiJ-1?usp=drive_link)
- **Application Demo:** [Demo Video ](https://drive.google.com/drive/folders/1Y0lmk4XpYophzh0W0Dguum9Bv2S4psfw?usp=drive_link)

## Features

- **User Registration & Authentication:** Secure user login and registration process.
- **Doctor Profile Management:** Doctors can manage their profiles and set availability.
- **Appointment Booking:** Patients can browse through doctors, view their profiles, and book available appointment slots.
- **Real-Time Notifications:** Users receive notifications for appointment confirmations or changes.
- **Admin Dashboard:** Admin access to manage users and doctors, view all bookings, and oversee the system's functionality.

## Tech Stack

- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS, Bootstrap


### Prerequisites
- Node.js
- MongoDB

### Steps

1. Clone the repository:
   
  (https://github.com/sir-zech/BOOK-A-DOCTOR-USING-MERN.git)
   

2. Install dependencies for both backend and frontend:
   ```bash
   cd book-a-doctor
   npm install
   cd client
   npm install
   npm install react-scripts
   ```

3. Set up environment variables for the backend:
   - Inside the .env file update your connection string to coonect with your MongoDB Database. 
   also update it in the config>> ConnectToMongoDB.js files.

     ```
     MONGO_URI=your_mongodb_connection_string
    
     ```

4. Start the application:
   
   first start the server  and the the client.
   ```bash
   cd server
   npm start
   cd..
   cd client
   npm start
   ```
The app should now be running at `http://localhost:8000` (frontend) and `http://localhost:3000` (backend).

## Usage

1. **Register/Login:** New users can sign up and create an account, while returning users can log in.
2. **Searcg Doctors:** Browse the list of doctors and filter based on specialization, location, etc.
3. **Book Appointments:** Select an available time slot and confirm your appointment.
4. **Manage Profile:** Doctors can update their availability, and users can view or manage their booking history.


## Team

This project was developed as part of our academic program. Here are our team members:

- **Naveen B**
- **Mouli Monish S**
- **Nimalan R**
- **Srivatsan C.B**

Each team member contributed to various parts of the project, from backend development to UI design, making this project a team effort.

--- 

