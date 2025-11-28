import React from "react";
import products from "../data/products";
import ProductCard from "../components/productcard";

function Products() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-kicker">Collection</div>
          <h2 className="section-title">Our Teas</h2>

          <div className="grid grid-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
