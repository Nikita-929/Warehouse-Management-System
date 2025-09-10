// src/components/Toast.js
import React from 'react';

const Toast = ({ message, type = 'success' }) => {
  const bgColor = type === 'success' ? 'bg-success' : 'bg-danger';
  
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className={`toast show align-items-center text-white ${bgColor} border-0`} role="alert">
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    </div>
  );
};

export default Toast;