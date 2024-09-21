import React from 'react'
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">DevCALT</h3>
          <p className="footer-text">Find a coding buddy for your next full-stack project!</p>
        </div>
        {/* <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">Email: support@devcalt.com</p>
          <p className="footer-text">Phone: +123-456-7890</p>
        </div> */}
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-socials">
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DevCALT. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
