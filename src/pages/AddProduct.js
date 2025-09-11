// src/pages/AddProduct.js
import React, { useState, useEffect } from 'react';

const AddProduct = ({ showToast }) => {
  const [formData, setFormData] = useState({
    product_code: '',
    product_name: '',
    packets: '',
    qty_per_packet: '',
    quantity: '',
    unit: '',
    batch_no: '',
    grn_no: '',
    sales_invoice_no: '',
    material_type: '',
    source: '',
    date: ''
  });
  
  const [productNames, setProductNames] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    // Simulate fetching product names and suppliers
    const fetchData = async () => {
      try {
        // Mock API calls
        const productNamesData = ['Product A', 'Product B', 'Product C'];
        const suppliersData = [
          { name: 'Supplier X', type: 'Local' },
          { name: 'Supplier Y', type: 'International' }
        ];
        
        setProductNames(productNamesData);
        setSuppliers(suppliersData);
      } catch (error) {
        showToast('Error loading form data', 'error');
      }
    };
    
    fetchData();
  }, [showToast]);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData(prev => {
    const updatedForm = { ...prev, [name]: value };

    if (updatedForm.packets && updatedForm.qty_per_packet) {
      updatedForm.quantity = (
        parseFloat(updatedForm.packets) * parseFloat(updatedForm.qty_per_packet)
      ).toString();
    } else {
      updatedForm.quantity = ''; // clear if not both entered
    }

    return updatedForm;
  });
};

  
     



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      console.log('Submitting product:', formData);
      showToast('Product added successfully', 'success');
      
      // Reset form
      setFormData({
        product_code: '',
        product_name: '',
        packets: '',
        qty_per_packet: '',
        quantity: '',
        unit: '',
        batch_no: '',
        grn_no: '',
        sales_invoice_no: '',
        material_type: '',
        source: '',
        date: ''
      });
    } catch (error) {
      showToast('Error adding product', 'error');
    }
  };


  const handleIncrement = () => {
  setFormData(prev => {
    const currentValue = parseFloat(prev.packets || 0);
    const newValue = (currentValue + 0.1).toFixed(1);
    let updatedForm = { ...prev, packets: newValue };

    if (updatedForm.packets && updatedForm.qty_per_packet) {
      updatedForm.quantity = (
        parseFloat(updatedForm.packets) * parseFloat(updatedForm.qty_per_packet)
      ).toFixed(2);
    } else {
      updatedForm.quantity = '';
    }

    return updatedForm;
  });
};

const handleDecrement = () => {
  setFormData(prev => {
    const currentValue = parseFloat(prev.packets || 0);
    if (currentValue > 0) {
      const newValue = Math.max(0, (currentValue - 0.1)).toFixed(1);
      let updatedForm = { ...prev, packets: newValue };

      if (updatedForm.packets && updatedForm.qty_per_packet) {
        updatedForm.quantity = (
          parseFloat(updatedForm.packets) * parseFloat(updatedForm.qty_per_packet)
        ).toFixed(2);
      } else {
        updatedForm.quantity = '';
      }

      return updatedForm;
    }
    return prev;
  });
};


  return (
    <div>
      <h1 className="mb-4">Add New Product</h1>
      
      <div className="card shadow">
        <div className="card-body">
          <form onSubmit={handleSubmit} id="productForm">
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="product_code" className="form-label">Product Code *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="product_code"
                  name="product_code"
                  value={formData.product_code}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="product_name" className="form-label">Product Name *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="product_name"
                  name="product_name"
                  list="productNames"
                  value={formData.product_name}
                  onChange={handleChange}
                  required 
                />
                <datalist id="productNames">
                  {productNames.map((name, index) => (
                    <option key={index} value={name} />
                  ))}
                </datalist>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="packets" className="form-label">Packets</label>
                <div className="input-group">
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    className="form-control text-center" 
                    id="packets"
                    name="packets"
                    value={formData.packets}
                    onChange={handleChange}
                    min="0"
                  />
                  <button 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="qty_per_packet" className="form-label">Quantity per Packet</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="qty_per_packet"
                  name="qty_per_packet"
                  value={formData.qty_per_packet}
                  onChange={handleChange}
                  min="0"
                  step="1"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="quantity" className="form-label">Total Quantity</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}                  
                  readOnly                  
                />
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="unit" className="form-label">Unit *</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="batch_no" className="form-label">Batch No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="batch_no"
                  name="batch_no"
                  value={formData.batch_no}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="grn_no" className="form-label">GRN No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="grn_no"
                  name="grn_no"
                  value={formData.grn_no}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="sales_invoice_no" className="form-label">Sales Invoice No</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="sales_invoice_no"
                  name="sales_invoice_no"
                  value={formData.sales_invoice_no}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="material_type" className="form-label">Material Type *</label>
                <select
                  className="form-select"
                  id="material_type"
                  name="material_type"
                  value={formData.material_type}
                  onChange={handleChange}
                  required
                  >
                    <option value="">Select Material Type</option>
                    <option value="rm">RM</option>
                    <option value="pm">PM</option>
                    <option value="fm">FM</option>
                  </select>
                
              </div>
              <div className="col-md-4">
                <label htmlFor="source" className="form-label">Supplier/Client/Production Floor *</label>
                <input
                 type='text'
                 className='form-control'
                 id="source"
                 name="source"
                 value={formData.source}
                 onChange={handleChange}
                 required
                />              
              </div>

              <div className='col-md-4'>
                <label htmlFor='date' className='form-label'>Date</label>
                <input
                type='date'
                className='form-control'
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                />
              </div>
            </div>
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" className="btn btn-secondary me-md-2"
              onClick={()=> setFormData({
                product_code: '',
                product_name: '',
                packets: '',
                qty_per_packet: '',
                quantity: '',
                unit: '',
                batch_no: '',
                grn_no: '',
                sales_invoice_no: '',
                material_type: '',
                source: '',
                date: ''
              })}
              >
                Reset</button>
              <button type="submit" className="btn btn-primary">Save Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
