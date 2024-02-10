import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='myntra-footer'>
      <div className='container'>
        <div className='row'>
          {/* Footer sections (you can add/remove based on your needs) */}
          <div className='col-md-3'>
            <h2>Help Center</h2>
            <ul>
              <li>
                <Link to='/'>FAQ</Link>
              </li>
              <li>
                <Link to='/'>Return Policy</Link>
              </li>
              <li>
                <Link to='/'>Order Tracking</Link>
              </li>
              <li>
                <Link to='/'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h2>About Us</h2>
            <ul>
              <li>
                <Link to='/'>Our Story</Link>
              </li>
              <li>
                <Link to='/'>Careers</Link>
              </li>
              <li>
                <Link to='/'>Press Releases</Link>
              </li>
              <li>
                <Link to='/'>Investor Relations</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h2>Contact Us</h2>
            <ul>
              <li>
                Phone: <a href='tel:+911234567890'>+91 123 456 7890</a>
              </li>
              <li>
                Email: <a href='mailto:care@myntra.com'>care@myntra.com</a>
              </li>
              <li>Social Media:</li>
              <ul>
                <li>
                  <a
                    href='https://www.facebook.com/myntra'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/myntra'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <div className='col-md-3'>
            <h2>Payment Options</h2>
            <ul>
              <li>Credit Cards</li>
              <li>Debit Cards</li>
              <li>Net Banking</li>
              <li>Cash on Delivery (COD)</li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <p>&copy; 2024 Myntra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
