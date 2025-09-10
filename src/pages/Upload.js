// src/pages/Upload.js
import React, { useState } from 'react';

const Upload = ({ showToast }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      showToast('Please select a file to upload', 'error');
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Simulate file upload
      console.log('Uploading file:', file.name);
      
      // Simulate delay for upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showToast('File uploaded successfully', 'success');
      setFile(null);
      // Reset file input
      document.getElementById('excelFile').value = '';
    } catch (error) {
      showToast('Error uploading file', 'error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h1 className="mb-4">Upload Excel File</h1>
      
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="excelFile" className="form-label">Select Excel File</label>
              <input 
                type="file" 
                className="form-control" 
                id="excelFile"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                disabled={isUploading}
              />
              <div className="form-text">
                Only Excel files (.xlsx, .xls) are allowed. Maximum file size: 5MB
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={!file || isUploading}
            >
              {isUploading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Uploading...
                </>
              ) : (
                <>
                  <i className="fas fa-upload me-2"></i> Upload File
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      <div className="card shadow mt-4">
        <div className="card-header bg-light">
          <h5 className="mb-0">Excel File Format</h5>
        </div>
        <div className="card-body">
          <p>Your Excel file should have the following columns in order:</p>
          <ol>
            <li>Barcode</li>
            <li>Product Code</li>
            <li>Product Name</li>
            <li>Quantity</li>
            <li>Unit</li>
            <li>Batch No</li>
            <li>GRN No</li>
            <li>Material Type</li>
            <li>Type (IN/OUT)</li>
            <li>Party</li>
          </ol>
          <p className="text-muted">
            Note: The first row should contain headers. Date will be automatically set to the current date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;