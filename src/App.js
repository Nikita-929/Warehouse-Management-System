// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ListProducts from './pages/ListProducts';
import Reports from './pages/Reports';
import Upload from './pages/Upload';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ ...toast, show: false }), 3000);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route 
              path="/products/add" 
              element={<AddProduct showToast={showToast} />} 
            />
            <Route 
              path="/products/list" 
              element={<ListProducts showToast={showToast} />} 
            />
            <Route path="/reports" element={<Reports />} />
            <Route path="/upload" element={<Upload showToast={showToast} />} />
          </Routes>
        </div>
        {toast.show && <Toast message={toast.message} type={toast.type} />}
      </div>
    </Router>
  );
}

export default App;