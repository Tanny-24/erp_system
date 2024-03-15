import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productss from '../../Lib/pro';

const ProductsManagement = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const [productList, setProductList] = useState(productss);
  const [editProductId, setEditProductId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProductId !== null) {
      // Update existing product
      const updatedList = productList.map(product => {
        if (product.id === editProductId) {
          return { ...product, ...formData };
        }
        return product;
      });
      setProductList(updatedList);
      setEditProductId(null);
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(), // Generate a unique ID
        ...formData
      };
      setProductList([...productList, newProduct]);
    }
    setFormData({ name: '', category: '', price: '', quantity: '' });
  };

  const handleEdit = (product) => {
    setFormData({ ...product });
    setEditProductId(product.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedList = productList.filter(product => product.id !== id);
      setProductList(updatedList);
    }
  };

  return (
    <div className="container mx-auto p-4 h-full md:h-screen overflow-y-auto">
      <h2 className="text-3xl font-bold mb-4">Products Management</h2>

      {/* Add product form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-wrap mb-2">
          <input
            type="text"
            className="border border-gray-300 px-3 py-1 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
            placeholder="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="border border-gray-300 px-3 py-1 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="border border-gray-300 px-3 py-1 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="border border-gray-300 px-3 py-1 rounded mr-2 mb-2 md:mb-0 w-full md:w-auto"
            placeholder="Stock Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded w-full md:w-auto">{editProductId !== null ? 'Update Product' : 'Add Product'}</button>
        </div>
      </form>

      {/* Display products */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">Name</th>
            <th className="border border-gray-300 py-2 px-4">Category</th>
            <th className="border border-gray-300 py-2 px-4">Price</th>
            <th className="border border-gray-300 py-2 px-4">Stock Quantity</th>
            <th className="border border-gray-300 py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => (
            <tr key={product.id}>
              <td className="border border-gray-300 py-2 px-4">{editProductId === product.id ? <input type="text" name="name" value={formData.name} onChange={handleChange} required /> : product.name}</td>
              <td className="border border-gray-300 py-2 px-4">{editProductId === product.id ? <input type="text" name="category" value={formData.category} onChange={handleChange} required /> : product.category}</td>
              <td className="border border-gray-300 py-2 px-4">{editProductId === product.id ? <input type="number" name="price" value={formData.price} onChange={handleChange} required /> : product.price}</td>
              <td className="border border-gray-300 py-2 px-4">{editProductId === product.id ? <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required /> : product.quantity}</td>
              <td className="border border-gray-300 py-2 px-4">
                {editProductId === product.id ? (
                  <>
                    <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 border border-transparent" >Save</button>
                    <button onClick={() => setEditProductId(null)} className="border border-red-500 hover:border-red-700 text-red-500 font-bold py-2 px-4 rounded" >Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2">Edit</button>
                    <button onClick={() => handleDelete(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/" className="block mt-8 underline">Go to Dashboard</Link>
    </div>
  );
};

export default ProductsManagement;
