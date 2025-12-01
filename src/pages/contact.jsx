import React from "react";

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Demo form. Connect this to backend.");
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Contact & Wholesale</h2>

          <div className="card split">
            <form className="form-grid" onSubmit={onSubmit}>
              <div>
                <div className="form-label">Name</div>
                <input className="input" required />
              </div>

              <div>
                <div className="form-label">Email</div>
                <input className="input" type="email" required />
              </div>

              <div>
                <div className="form-label">Message</div>
                <textarea className="textarea" rows="5" required />
              </div>

              <button className="btn">Send message</button>
            </form>

            <div>
              <h3>Visit us</h3>
              <p className="section-subtitle">Amritsar, Punjab, India</p>
             <div className="contact-image-card">
  <div className="contact-top-bar">
    <span className="contact-pill">
      📞 +91 89686-41084
    </span>
    <span className="contact-pill">
      📍 AMRITSAR
    </span>
  </div>

  <img src="public/images/contact.png" className="contact-img" alt="Tea Castle Contact" />
</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
