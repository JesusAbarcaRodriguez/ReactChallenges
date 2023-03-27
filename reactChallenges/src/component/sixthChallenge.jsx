import React, { useState, useEffect } from "react";

function Product() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const response = await fetch("https://dummyjson.com/products/1");
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Descuento: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Marca: {product.brand}</p>
      <p>Categoría: {product.category}</p>
      <ul>
        {product.images &&
          product.images.map((image) => (
            <li key={image}>
              <img src={image} alt={product.title} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Product;
