import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/productcard";

function Home() {
  return (
    <main>
<section className="section">
  <div className="container">
    <div className="hero-card">
      <img src="public/images/hero.png" alt="Tea Castle Hero" className="hero-card-img" />
    </div>

    <div className="hero-content">
      <span className="badge">Est. Amritsar</span>
      <h1 className="section-title">Timeless Indian Teas</h1>
      <p className="section-subtitle">
        Premium teas sourced from historic gardens of India.
      </p>

      <div className="hero-actions">
        <Link to="/products" className="btn">Shop collection</Link>
        <Link to="/about" className="btn btn-secondary">Our story</Link>
      </div>
    </div>
  </div>
</section>


      <section className="section">
        <div className="container">
          <div className="section-kicker">Featured</div>
          <h2 className="section-title">Top Pick's</h2>
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

export default Home;

