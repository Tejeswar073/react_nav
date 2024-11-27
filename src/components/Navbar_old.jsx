import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              Inventory
            </a>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="hover:text-gray-200">
              Home page
            </a>
            <a href="/about" className="hover:text-gray-200">
              About Page
            </a>
            <a href="/services" className="hover:text-gray-200">
              Services Page
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contact Page
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
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
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 hover:bg-blue-500">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-blue-500">
            About
          </a>
          <a href="/services" className="block px-4 py-2 hover:bg-blue-500">
            Services
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
