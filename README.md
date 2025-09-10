# Warehouse-Management-System
A React-based Warehouse Management System (WMS) frontend that enables users to manage warehouse operations such as adding products, viewing product lists, uploading files, and checking reports.

The app uses React Router v6, Bootstrap 5, Font Awesome, and custom CSS for a modern, responsive UI.
🚀 Features

Dashboard – Central overview of warehouse operations

Add Product – Form to add new products

List Products – View and manage stored products

Reports – Reporting and analytics section (extendable)

Upload – Upload CSVs, product data, or stock sheets

Toast Notifications – Success/error alerts with auto-dismiss

Responsive Design – Mobile-friendly with Bootstrap grid + custom CSS

🛠️ Tech Stack

React – Frontend framework (v18)

React Router DOM – Navigation and routing (v6)

Bootstrap 5 – Styling & layout framework

Font Awesome – Icons

Custom CSS – Additional design tweaks (App.css and component styles)
📂 Project Structure
public/
│── index.html        # Base HTML with Bootstrap + Font Awesome
│── favicon.ico
│
src/
│── App.js            # Main app with routing + toast system
│── App.css           # Custom global CSS
│
├── components/
│   ├── Navbar.js
│   ├── Toast.js
│
├── pages/
│   ├── Dashboard.js
│   ├── AddProduct.js
│   ├── ListProducts.js
│   ├── Reports.js
│   ├── Upload.js
