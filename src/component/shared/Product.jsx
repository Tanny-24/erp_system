import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category A", price: 10, quantity: 100 },
    { id: 2, name: "Product 2", category: "Category B", price: 20, quantity: 50 },
    { id: 3, name: "Product 3", category: "Category C", price: 30, quantity: 200 }
  ]);

  const [formData, setFormData] = useState({
    id: null,
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = () => {
    const { name, category, price, quantity } = formData;
    if (name && category && price && quantity) {
      const newProduct = {
        id: Date.now(), // Using current timestamp as id
        name,
        category,
        price: parseFloat(price),
        quantity: parseInt(quantity)
      };
      setProducts([...products, newProduct]);
      setFormData({ id: null, name: '', category: '', price: '', quantity: '' });
      setShowAddForm(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setFormData({ ...productToEdit });
    setShowAddForm(true);
  };

  const handleUpdateProduct = () => {
    const { id, name, category, price, quantity } = formData;
    if (name && category && price && quantity) {
      const updatedProducts = products.map(product =>
        product.id === id ? { ...product, name, category, price, quantity } : product
      );
      setProducts(updatedProducts);
      setFormData({ id: null, name: '', category: '', price: '', quantity: '' });
      setShowAddForm(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleDeleteProduct = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      const filteredProducts = products.filter(product => product.id !== id);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Products Management</h2>

      <h2 className="text-2xl font-bold mt-8">Product List</h2>
      <table className="w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">Name</th>
            <th className="border border-gray-300 py-2 px-4">Category</th>
            <th className="border border-gray-300 py-2 px-4">Price</th>
            <th className="border border-gray-300 py-2 px-4">Stock Quantity</th>
            <th className="border border-gray-300 py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="border border-gray-300 py-2 px-4">{product.name}</td>
              <td className="border border-gray-300 py-2 px-4">{product.category}</td>
              <td className="border border-gray-300 py-2 px-4">{product.price}</td>
              <td className="border border-gray-300 py-2 px-4">{product.quantity}</td>
              <td className="border border-gray-300 py-2 px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2" onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!showAddForm && (
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8" onClick={() => setShowAddForm(true)}>Add Product</button>
      )}

      {showAddForm && (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="category" value={formData.category} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Stock Quantity:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={formData.id ? handleUpdateProduct : handleAddProduct}>{formData.id ? 'Update Product' : 'Add Product'}</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowAddForm(false)}>Cancel</button>
        </div>
      )}

      <Link to="/" className="block mt-8 underline">Go to Dashboard</Link>
    </div>
  );
};

export default ProductsManagement;
