import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../node_modules/react-i18next';
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navLinks = [
  {
    name: t('nav.home'),
    path: '/'
  },
  {
    name: t('nav.about'),
    path: '/about'
  },
  {
    name: t('nav.services'),
    path: '/services'
  },
  {
    name: t('nav.projects'),
    path: '/projects'
  },
  {
    name: t('nav.contact'),
    path: '/contact'
  }];

  const isActive = (path: string) => location.pathname === path;
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl text-primary">
            Full Stack Software Engineer
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${isActive(link.path) ? 'text-secondary' : 'text-gray-600 hover:text-secondary'}`}>
              
                {link.name}
              </Link>
            )}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors">
              
              <Globe size={16} />
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 p-2 text-gray-600 hover:text-secondary transition-colors">
              
              <Globe size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-secondary transition-colors"
              aria-label="Toggle menu">
              
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-b border-gray-200">
          
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 font-medium transition-colors ${isActive(link.path) ? 'text-secondary' : 'text-gray-600 hover:text-secondary'}`}>
              
                  {link.name}
                </Link>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}