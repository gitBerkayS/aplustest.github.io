import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../config/theme';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">{theme.brandName}</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
            >
              About
            </Link>
            <Link 
              to="/team" 
              className={`transition-colors ${isActive('/team') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2 text-orange-600">
            <Phone className="w-5 h-5" />
            <span>(604) 606-4202</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors text-left ${isActive('/') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors text-left ${isActive('/services') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors text-left ${isActive('/about') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                About
              </Link>
              <Link 
                to="/team" 
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors text-left ${isActive('/team') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Our Team
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors text-left ${isActive('/contact') ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-2 text-orange-600 pt-2 border-t border-gray-200">
                <Phone className="w-5 h-5" />
                <span>(604) 606-4202</span>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}