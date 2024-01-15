
import React from 'react';

const ProductDetail = ({ match }) => {
  const productId = match.params.id; // Extract product id from the route params

  // Fetch product details based on productId (you can use API calls or dummy data)
  const productDetails = {
    id: productId,
    name: `Mobile ${productId}`,
    // Add more details as needed
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>ID: {productDetails.id}</p>
      <p>Name: {productDetails.name}</p>
      {/* Add more details */}
    </div>
  );
};

export default ProductDetail;
