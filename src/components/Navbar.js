// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-warehouse me-2"></i>
          Warehouse Management
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    className={`dropdown-item ${location.pathname === '/products/add' ? 'active' : ''}`} 
                    to="/products/add"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`dropdown-item ${location.pathname === '/products/list' ? 'active' : ''}`} 
                    to="/products/list"
                  >
                    List Products
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/reports' ? 'active' : ''}`} 
                to="/reports"
              >
                Reports
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/upload' ? 'active' : ''}`} 
                to="/upload"
              >
                Upload
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;