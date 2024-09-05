# E-Commerce Project

This is a fully responsive e-commerce website built using **React** with **Vite** for fast development, **Tailwind CSS** for styling, and **Strapi CMS** with a **PostgreSQL** database for the backend. The backend is hosted on **Railway**, with the database managed by **Aiven**.

## Features

- **User Authentication:**
  - Sign up and log in with dynamic UI changes.
  - Protected routes based on user status.
  - Log out functionality.
  
- **Cart Management:**
  - Add products to the cart.
  - Remove products from the cart.
  - Update the quantity of products in the cart.
  
- **Wishlist:**
  - Add products to the wishlist.
  - Remove products from the wishlist.
  - Move all products from the wishlist to the cart.
  
- **Product Details:**
  - View detailed information about each product.
  - Show related items based on the product's category.
  
- **Interactive UI:**
  - Animations and transitions for a smooth, interactive user experience.
  - Swipe functionality to browse products.
  
- **Responsive Design:**
  - Fully responsive on all devices.
  - Compatible with modern browsers.

## Tech Stack

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Vite**: Lightning-fast build tool for frontend development.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive and modern UI.
  
### Backend:
- **Strapi CMS**: Headless CMS used to manage content and connect with the database.
- **PostgreSQL**: Database for storing product, user, and cart information.
- **Railway**: Cloud platform for hosting the Strapi CMS backend.
- **Aiven**: Service managing the PostgreSQL database.

## Libraries Used

- **react-router-dom**: Manages routing, including protected routes based on user authentication.
- **lucid-react**: Icon library for adding beautiful icons to the UI.
- **axios**: Handles API requests to interact with the backend.
- **react-hook-form**: Manages form validation and submission.
- **Zod**: Provides schema validation for forms to ensure the correct data is submitted.
- **swiper**: Adds swipe functionality for product carousels, enhancing user experience.
- **react-hook**: Enables the use of React's hooks for managing state and side effects.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-project.git
2. Install dependencies:
     cd ecommerce-project
     npm install
3. Run the project:
    npm run dev
Built with ❤️ by Mohamed Abobakr
