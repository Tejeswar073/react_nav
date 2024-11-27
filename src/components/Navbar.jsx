import { useState } from 'react';
import './Navbar.css'; // Import the new CSS file

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">
            <a href="/">Inventory</a>
          </div>

          {/* Menu Items */}
          <div className="menu-items">
            <a href="/">Home page</a>
            <a href="/about">About Page</a>
            <a href="/services">Services Page</a>
            <a href="/contact">Contact Page</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
              <svg
                className="menu-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
