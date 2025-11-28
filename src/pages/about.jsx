import React from "react";

function About() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-kicker">About</div>
          <h2 className="section-title">Rooted in Heritage</h2>

          <div className="card split">
            <div className="hero-figure" style={{ aspectRatio: "3/2" }}>
              <img src="/images/about-us.png" className="about-img"/>
            </div>

            <div>
              <p>
                Tea Castle began in Amritsar, inspired by generations of tea
                makers. Our mission is to curate remarkable teas and share them
                with the world, increasing our customer base.
              </p>
              <p>
                We work with small growers, sustainable gardens, and blend in
                small batches to preserve aroma and quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
