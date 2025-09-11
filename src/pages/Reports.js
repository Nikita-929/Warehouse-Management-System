import React, { useState } from "react";

// Helper function to format date in Indian system (DD/MM/YYYY)
const formatIndianDate = (dateStr, withTime = false) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    ...(withTime && {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
  });
};

export default function Reports() {
  // Dummy data
  const dummyTransactions = [
    {
      barcode: "123456789",
      product_code: "P001",
      product_name: "Product A",
      quantity: 10,
      unit: "kg",
      batch_no: "B001",
      grn_no: "GRN123",
      material_type: "RM",
      type: "IN",
      party: "Supplier A",
      created_at: "10-10-2025",
    },
    {
      barcode: "987654321",
      product_code: "P002",
      product_name: "Product B",
      quantity: 5,
      unit: "pcs",
      batch_no: "B002",
      grn_no: "GRN124",
      material_type: "PM",
      type: "OUT",
      party: "Client B",
      created_at: new Date().toISOString(),
    },
  ];

  // State for filters
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    typeFilter: "all",
  });

  // Handle filter form input
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter transactions (frontend only)
  const filteredTransactions = dummyTransactions.filter((t) => {
    const createdAt = new Date(t.created_at);
    const from = filters.fromDate ? new Date(filters.fromDate) : null;
    const to = filters.toDate ? new Date(filters.toDate) : null;

    const matchDate =
      (!from || createdAt >= from) && (!to || createdAt <= to);

    const matchType =
      filters.typeFilter === "all" ||
      t.type.toLowerCase() === filters.typeFilter;

    return matchDate && matchType;
  });

  return (
    <div className="container-fluid">
      <h1 className="mt-4">Transaction Reports</h1>

      {/* Filter Form */}
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-filter me-1"></i> Filter Transactions
        </div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="fromDate">From Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="fromDate"
                  name="fromDate"
                  value={filters.fromDate}
                  onChange={handleChange}
                  required
                />
                {filters.fromDate && (
                  <small className="text-muted">
                    Selected: {formatIndianDate(filters.fromDate)}
                  </small>
                )}
              </div>
              <div className="col-md-3">
                <label htmlFor="toDate">To Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="toDate"
                  name="toDate"
                  value={filters.toDate}
                  onChange={handleChange}
                  required
                />
                {filters.toDate && (
                  <small className="text-muted">
                    Selected: {formatIndianDate(filters.toDate)}
                  </small>
                )}
              </div>
              <div className="col-md-4">
                <label htmlFor="typeFilter">Filter Type</label>
                <select
                  className="form-control"
                  id="typeFilter"
                  name="typeFilter"
                  value={filters.typeFilter}
                  onChange={handleChange}
                >
                  <option value="all">All Transactions</option>
                  <option value="in">IN Transactions Only</option>
                  <option value="out">OUT Transactions Only</option>
                </select>
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary w-100">
                  Apply Filters
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="btn-group" role="group">
            <button className="btn btn-success">
              <i className="fas fa-file-excel me-1"></i> Export to Excel
            </button>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1"></i> Transaction Records
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Product Code</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Unit</th>
                  <th>Batch No</th>
                  <th>GRN No</th>
                  <th>RM/PM/FM</th>
                  <th>Type</th>
                  <th>Supplier/Client/Floor</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((t, index) => (
                    <tr key={index}>
                      <td>{t.barcode}</td>
                      <td>{t.product_code}</td>
                      <td>{t.product_name}</td>
                      <td>{t.quantity}</td>
                      <td>{t.unit}</td>
                      <td>{t.batch_no}</td>
                      <td>{t.grn_no}</td>
                      <td>{t.material_type}</td>
                      <td>
                        <span
                          className={`badge ${
                            t.type === "IN" ? "bg-success" : "bg-danger"
                          }`}
                        >
                          {t.type}
                        </span>
                      </td>
                      <td>{t.party}</td>
                      <td>{formatIndianDate(t.created_at, true)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="11" className="text-center">
                      No transactions found for the selected filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
