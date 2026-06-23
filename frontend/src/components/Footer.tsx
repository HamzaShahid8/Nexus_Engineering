import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from '../../node_modules/react-i18next';
export function Footer() {
  const { t } = useTranslation();
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

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-3 text-white">
              {t('footer.title')}
            </h3>
            <p className="text-gray-300 text-sm">{t('footer.subtitle')}</p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-white">
              {t('footer.quickLinks')}
            </h4>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-accent transition-colors text-sm">
                
                  {link.name}
                </Link>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold mb-3 text-white">
              {t('footer.connect')}
            </h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="https://github.com/HamzaShahid8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="GitHub">
                
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-shahid-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="LinkedIn">
                
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>);

}