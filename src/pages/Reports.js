// src/pages/Reports.js
import React, { useState, useEffect } from 'react';

const Reports = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filters, setFilters] = useState({
    fromDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    toDate: new Date().toISOString().split('T')[0],
    typeFilter: 'all'
  });

  useEffect(() => {
    // Simulate fetching transactions
    const fetchTransactions = async () => {
      try {
        // Mock data
        const mockTransactions = [
          {
            id: 1,
            barcode: '123456',
            product_code: 'P001',
            product_name: 'Product A',
            quantity: 50,
            unit: 'pcs',
            batch_no: 'BATCH001',
            grn_no: 'GRN001',
            material_type: 'Raw Material',
            type: 'IN',
            party: 'Supplier X',
            created_at: '2023-05-15 10:30:00'
          },
          {
            id: 2,
            barcode: '789012',
            product_code: 'P002',
            product_name: 'Product B',
            quantity: 25,
            unit: 'pcs',
            batch_no: 'BATCH002',
            grn_no: 'GRN002',
            material_type: 'Finished Goods',
            type: 'OUT',
            party: 'Customer Y',
            created_at: '2023-05-16 14:45:00'
          }
        ];
        
        setTransactions(mockTransactions);
        setFilteredTransactions(mockTransactions);
      } catch (error) {
        console.error('Error loading transactions:', error);
      }
    };
    
    fetchTransactions();
  }, []);

  useEffect(() => {
    filterTransactions();
  }, [filters, transactions]);

  const filterTransactions = () => {
    let filtered = [...transactions];
    
    // Filter by date
    filtered = filtered.filter(transaction => {
      const transactionDate = new Date(transaction.created_at);
      const fromDate = new Date(filters.fromDate);
      const toDate = new Date(filters.toDate);
      toDate.setHours(23, 59, 59, 999);
      
      return transactionDate >= fromDate && transactionDate <= toDate;
    });
    
    // Filter by type
    if (filters.typeFilter !== 'all') {
      filtered = filtered.filter(transaction => 
        transaction.type === filters.typeFilter.toUpperCase()
      );
    }
    
    setFilteredTransactions(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExport = () => {
    // Simulate export functionality
    console.log('Exporting data with filters:', filters);
    alert('Export functionality would be implemented here');
  };

  return (
    <div>
      <h1 className="mb-4">Reports</h1>
      
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-3">
              <label htmlFor="fromDate" className="form-label">From Date</label>
              <input
                type="date"
                className="form-control"
                id="fromDate"
                name="fromDate"
                value={filters.fromDate}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="toDate" className="form-label">To Date</label>
              <input
                type="date"
                className="form-control"
                id="toDate"
                name="toDate"
                value={filters.toDate}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="typeFilter" className="form-label">Transaction Type</label>
              <select
                className="form-select"
                id="typeFilter"
                name="typeFilter"
                value={filters.typeFilter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="in">IN</option>
                <option value="out">OUT</option>
              </select>
            </div>
            <div className="col-md-3 d-flex align-items-end">
              <button className="btn btn-primary w-100" onClick={handleExport}>
                <i className="fas fa-download me-1"></i> Export to Excel
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card shadow">
        <div className="card-body">
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">No transactions found for the selected filters</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Barcode</th>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Batch No</th>
                    <th>GRN No</th>
                    <th>Material Type</th>
                    <th>Type</th>
                    <th>Party</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.barcode}</td>
                      <td>{transaction.product_code}</td>
                      <td>{transaction.product_name}</td>
                      <td>{transaction.quantity}</td>
                      <td>{transaction.unit}</td>
                      <td>{transaction.batch_no}</td>
                      <td>{transaction.grn_no}</td>
                      <td>{transaction.material_type}</td>
                      <td>
                        <span className={`badge ${transaction.type === 'IN' ? 'bg-success' : 'bg-danger'}`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td>{transaction.party}</td>
                      <td>{new Date(transaction.created_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;