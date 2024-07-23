import React from 'react';
import './css/footer.css';
import { ReactComponent as LinkedInIcon } from './svgicons/linkedin.svg';
import { ReactComponent as InstagramIcon } from './svgicons/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 MyPortfolio. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
