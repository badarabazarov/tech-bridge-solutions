
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-700 to-accent-teal bg-clip-text text-transparent">
              TechBridge
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Services
          </a>
          <a href="#partners" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Partners
          </a>
          <a href="#clients" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Clients
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Benefits
          </a>
          <a href="#tariffs" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Tariffs
          </a>
          <a href="#cases" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Cases
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-sm font-medium hover:text-brand-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button variant="default" size="sm">Get a Quote</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container py-4 space-y-3">
            <a href="#services" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Services
            </a>
            <a href="#partners" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Partners
            </a>
            <a href="#clients" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Clients
            </a>
            <a href="#benefits" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Benefits
            </a>
            <a href="#tariffs" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Tariffs
            </a>
            <a href="#cases" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Cases
            </a>
            <a href="#testimonials" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Testimonials
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              About
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              Contact
            </a>
            <Button variant="default" size="sm" className="w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
