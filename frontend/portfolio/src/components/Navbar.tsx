import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, LanguagesIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
  }];


  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav
        aria-label="Primary"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-[68px] gap-6">
          {/* Brand lockup */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-md">
            
            <span
              aria-hidden="true"
              className="relative w-10 h-10 rounded-lg bg-primary grid place-items-center flex-shrink-0 overflow-hidden">
              
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-secondary to-accent" />
              <span className="font-heading font-bold text-[15px] text-white tracking-tight">
                {t('brand.initials')}
              </span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading font-semibold text-[15px] text-primary tracking-tight">
                {t('brand.name')}
              </span>
              <span className="hidden sm:block mt-1 text-[10px] font-medium tracking-[0.14em] uppercase text-slate-500">
                {t('brand.role')}
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) =>
              <li key={link.path}>
                  <Link
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`relative text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm ${isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                  
                    {link.name}
                    {isActive(link.path) ?
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 inset-x-0 h-[2px] bg-secondary rounded-full" /> :

                  null}
                  </Link>
                </li>
              )}
            </ul>

            <div className="flex items-center gap-3 ps-8 border-s border-slate-200">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
                aria-label={
                i18n.language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'
                }>
                
                <LanguagesIcon size={16} />
                {i18n.language === 'en' ? 'العربية' : 'EN'}
              </button>
              <Link
                to="/contact"
                className="px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                
                {t('common.startProject')}
              </Link>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 text-slate-600 hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md"
              aria-label={
              i18n.language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'
              }>
              
              <LanguagesIcon size={20} />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu">
              
              {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen ?
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
          transition={{
            duration: 0.22,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="lg:hidden overflow-hidden bg-white border-b border-slate-200">
          
            <ul className="px-4 sm:px-6 py-4 space-y-1">
              {navLinks.map((link) =>
            <li key={link.path}>
                  <Link
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`block py-2.5 text-sm font-medium transition-colors duration-150 ${isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                
                    {link.name}
                  </Link>
                </li>
            )}
              <li className="pt-3">
                <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-4 py-3 bg-primary text-white text-sm font-semibold rounded-lg">
                
                  {t('common.startProject')}
                </Link>
              </li>
            </ul>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}