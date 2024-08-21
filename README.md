🛒 Final Exam Project: Product Page Application
This project is a React-based e-commerce application built using Vite. The application displays a list of 20 products fetched from an API, and allows users to view detailed information about each product. The project also includes navigation between the product list and product detail pages, using React Router.

📋 Project Objective
Create a Vite React application that:

Displays a list of 20 products on the main page.
Shows product price, title, photo, and rating.
Allows users to click on a product to view detailed information on a new page.
Includes a back button for easy navigation.
Follows best practices for project setup, state management, and UI design.

🛠️ Technologies Used
React: JavaScript library for building user interfaces.

Vite: Fast frontend build tool for modern web projects.

Axios: Promise-based HTTP client for the browser.

React Router DOM: Declarative routing for React.

Styled-Components: CSS-in-JS library for styling components.

⚙️ Project Features
1. Product List
Displays a list of 20 products with their price, title, photo, and rating.
Uses ProductItem component to render individual products.
2. Product Detail
Displays detailed information about the selected product.
Fetches data based on the product ID.
Includes a back button to return to the product list.
3. State Management
Uses React Hooks (useState, useEffect, useContext) to manage component state.
ProductContext is used to share state across components.
4. Routing
Uses react-router-dom to handle navigation between pages.
useParams is used to extract product IDs from the URL for fetching product details.
5. UI/UX Design
Material UI is used for building the user interface, ensuring a consistent look and feel.
Styled-Components are used for additional custom styling.
6. Error and Loading States
The application handles API loading and error states gracefully, displaying appropriate messages.

📝 How to Use
1. Viewing Products
On the main page, you will see a list of products. Each product displays its title, price, rating, and image.
2. Viewing Product Details
Click on any product to navigate to its details page, where you can see more information about the product.
Use the back button to return to the product list.

🔧 Project Setup and Deployment
1. Development
During development, use the Vite server (npm run dev) to run the application locally.
2. Build for Production
To create an optimized build for production, run:
bash
Copy code
npm run build
The optimized files will be generated in the dist/ directory.
3. Deployment
Deploy the contents of the dist/ directory to your preferred hosting service.

📖 Documentation
API Endpoints
Fetch 20 Products: https://fakestoreapi.com/products
Fetch Product by ID: https://fakestoreapi.com/products/{id}




Vite Documentation
Axios Documentation
React Router Documentation
Material UI Documentation
Styled-Components Documentation
