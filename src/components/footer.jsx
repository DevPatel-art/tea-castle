import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="tea-castle/public/images/logo.png" width="18" />
          <strong>Tea Castle</strong>
        </div>
        <small className="footer-text">
          © {year} Tea Castle · All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
