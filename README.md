# URL Shortener Application

This repository contains a full-stack URL shortener application with both frontend and backend components. The frontend is built using React, while the backend is powered by Spring Boot. This project is designed to provide a seamless user experience for shortening and managing URLs with advanced authentication features.

## Features

- **User Authentication**: Users can register, log in, and access their dashboard securely.
- **URL Shortening**: Users can shorten URLs and access them through a custom alias.
- **URL List Management**: View and manage shortened URLs.
- **Analytics**: Track the number of clicks on each shortened URL.
- **JWT Authentication**: Secure login and registration using JSON Web Token (JWT).
- **Responsive UI**: Mobile-friendly and fully responsive design using Tailwind CSS.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool for modern web projects, ensuring optimized performance.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

#### Key Libraries

- **react-router-dom**: Routing and navigation between components or pages.
- **react-icons**: Adding icons to the application.
- **react-hook-form**: Handling forms and form validation.
- **axios**: Making HTTP requests to interact with APIs.
- **react-hot-toast**: Displaying toast notifications.
- **react-chartjs-2**: Integrating charts and visualizing data.
- **Material-UI (MUI)**: Prebuilt, customizable Material Design components.
- **day.js**: Lightweight library for working with dates and times.
- **react-copy-to-clipboard**: Clipboard copying functionality.
- **react-loader-spinner**: Displaying loading spinners while waiting for data.
- **motion.dev**: Creating fluid, customizable animations and transitions.
- **react-query**: Managing server state, fetching, caching, and updating data efficiently.

### Backend

- **Spring Boot**: Framework for building production-ready Java-based applications.
- **Spring Security**: Handling security, including JWT authentication.
- **Spring Data JPA**: Managing database interactions and ORM.
- **PostgreSQL**: Relational database system.
- **Docker**: Containerizing the backend application for consistency across environments.

## Deployment

### Frontend
The React application is deployed at: [https://sniptrack.netlify.app](https://sniptrack.netlify.app)

### Backend
The Spring Boot application is deployed at: [https://url-shortener-sb-latest.onrender.com](https://url-shortener-sb-latest.onrender.com)

### Database
PostgreSQL is hosted on the Neon Console.

### Postman Documentation
The API's complete documentation is available on Postman. You can explore all endpoints, their request/response formats, and examples for better integration and testing.

[View Published Postman Documentation](https://documenter.getpostman.com/view/29635048/2sAYQWLZZA)

### Disclaimer

As the application is deployed on free versions of hosting platforms, it may take a few minutes (1-4) for the servers to start up. Please wait for the desired outputs.

