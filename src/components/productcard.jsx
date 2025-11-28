import React from "react";
import { useCart } from "../context/cartcontext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="card">
      <div className="product-image-wrapper">
        <img src={product.image} />
      </div>

      <h3 className="product-info-title">{product.name}</h3>
      <p className="product-info-note">{product.note}</p>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>₹{product.price}</strong>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
