// src/pages/ListProducts.js
import React, { useState, useEffect } from 'react';

const ListProducts = ({ showToast }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching products
    const fetchProducts = async () => {
      try {
        // Mock data
        const mockProducts = [
          {
            id: 1,
            product_code: 'P001',
            product_name: 'Product A',
            packets: 10,
            qty_per_packet: 5,
            quantity: 50,
            unit: 'pcs',
            batch_no: 'BATCH001',
            grn_no: 'GRN001',
            sales_invoice_no: 'INV001',
            material_type: 'Raw Material',
            source: 'Supplier X',
            created_at: '2023-05-15 10:30:00'
          },
          {
            id: 2,
            product_code: 'P002',
            product_name: 'Product B',
            packets: 5,
            qty_per_packet: 10,
            quantity: 50,
            unit: 'pcs',
            batch_no: 'BATCH002',
            grn_no: 'GRN002',
            sales_invoice_no: 'INV002',
            material_type: 'Finished Goods',
            source: 'Supplier Y',
            created_at: '2023-05-16 14:45:00'
          }
        ];
        
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
      } catch (error) {
        showToast('Error loading products', 'error');
      }
    };
    
    fetchProducts();
  }, [showToast]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product => 
        product.product_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.batch_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.grn_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.material_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.source.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        // Simulate API call
        console.log('Deleting product:', id);
        showToast('Product deleted successfully', 'success');
        
        // Update local state
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        showToast('Error deleting product', 'error');
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Product List</h1>
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-primary">
            <i className="fas fa-download me-1"></i> Export
          </button>
        </div>
      </div>
      
      <div className="card shadow">
        <div className="card-body">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-muted">No products found</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Product Code</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Batch No</th>
                    <th>GRN No</th>
                    <th>Material Type</th>
                    <th>Source</th>
                    <th>Date Added</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map(product => (
                    <tr key={product.id}>
                      <td>{product.product_code}</td>
                      <td>{product.product_name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.unit}</td>
                      <td>{product.batch_no}</td>
                      <td>{product.grn_no}</td>
                      <td>{product.material_type}</td>
                      <td>{product.source}</td>
                      <td>{new Date(product.created_at).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
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

export default ListProducts;