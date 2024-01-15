// src/components/Admin.js
import React from 'react';

const Admin = () => {
  // Fetch all products for admin display
  const allProducts = [
    { id: 1, name: 'Mobile 1' },
    { id: 2, name: 'Mobile 2' },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {allProducts.map(product => (
          <li key={product.id}>
            {product.name} - <button>Edit</button> <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
