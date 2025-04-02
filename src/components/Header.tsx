
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-700 to-accent-teal bg-clip-text text-transparent">
              Automagica
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.services')}
          </a>
          <a href="#partners" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.partners')}
          </a>
          <a href="#clients" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.clients')}
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.benefits')}
          </a>
          <a href="#tariffs" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.tariffs')}
          </a>
          <a href="#cases" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.cases')}
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.testimonials')}
          </a>
          <a href="#about" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.about')}
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-600 transition-colors">
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button variant="default" size="sm">{t('nav.quote')}</Button>
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
              {t('nav.services')}
            </a>
            <a href="#partners" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.partners')}
            </a>
            <a href="#clients" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.clients')}
            </a>
            <a href="#benefits" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.benefits')}
            </a>
            <a href="#tariffs" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.tariffs')}
            </a>
            <a href="#cases" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.cases')}
            </a>
            <a href="#testimonials" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.testimonials')}
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-brand-600 transition-colors">
              {t('nav.contact')}
            </a>
            <LanguageSwitcher />
            <Button variant="default" size="sm" className="w-full">{t('nav.quote')}</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
