import React from 'react';
import './Footer.css'; // Updated to simple CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="newsletterSection">
          <h2 className="sectionTitle">Be the first to know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <form className="subscribeForm">
            <label htmlFor="emailInput" className="visually-hidden">Enter your e-mail</label>
            <input type="email" id="emailInput" placeholder="Enter your e-mail..." className="emailInput" />
            <button type="submit" className="subscribeButton">Subscribe</button>
          </form>
        </div>
        <div className="contactSection">
          <h2 className="sectionTitle">CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="currencyTitle">Currency</h3>
          <div className="currencySelector">
            <img src=".\assets\usa.png" alt="" className="currencyFlag" />
            <img src="" alt="" className="dropdownIcon" />
            <span>USD</span>
          </div>
          <p className="currencyNote">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr className="footerDivider" />
      <div className="footerLinks">
        <div className="companyInfo">
          <h2 className="companyName">mettā muse</h2>
          <nav>
            <a href="#about">About Us</a>
            <a href="#stories">Stories</a>
            <a href="#artisans">Artisans</a>
            <a href="#boutiques">Boutiques</a>
            <a href="#contact">Contact Us</a>
            <a href="#eu-docs">EU Compliances Docs</a>
          </nav>
        </div>
        <div className="quickLinks">
          <h3>Quick Links</h3>
          <nav>
            <a href="#orders">Orders & Shipping</a>
            <a href="#join">Join/Login as a Seller</a>
            <a href="#payment">Payment & Pricing</a>
            <a href="#returns">Return & Refunds</a>
            <a href="#faqs">FAQs</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </nav>
        </div>
        <div className="socialSection">
          <h3>Follow Us</h3>
          <div className="socialIcons">
            <a href="#instagram" aria-label="Follow us on Instagram">
              <img src=".\assets\instagram.png" alt="" className="socialIcon" />
            </a>
            <a href="#linkedin" aria-label="Follow us on LinkedIn">
              <img src=".\assets\linkedin.png" alt="" className="socialIcon" />
            </a>
          </div>
          <h3>mettā muse Accepts</h3>
          <div className="paymentMethods">
            <img src=".\assets\GPAY.png" alt="Visa" className="paymentIcon" />
            <img src=".\assets\mastercard.png" alt="Mastercard" className="paymentIcon" />
            <img src=".\assets\paypal.png" alt="American Express" className="paymentIcon" />
            <img src=".\assets\amex.png" alt="Discover" className="paymentIcon" />
            <img src=".\assets\apay.png" alt="JCB" className="paymentIcon" />
            <img src=".\assets\opay.png" alt="UnionPay" className="paymentIcon" />
          </div>
        </div>
      </div>
      <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
