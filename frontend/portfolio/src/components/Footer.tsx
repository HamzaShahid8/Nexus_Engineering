import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT } from '../data/contact';

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


  const contactLinks = [
  {
    icon: MailIcon,
    value: CONTACT.email,
    href: CONTACT.emailHref,
    external: false
  },
  {
    icon: MessageCircleIcon,
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappHref,
    external: true
  },
  {
    icon: PhoneIcon,
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    external: false
  }];


  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="relative w-10 h-10 rounded-lg bg-white/10 grid place-items-center overflow-hidden">
                
                <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-secondary to-accent" />
                <span className="font-heading font-bold text-[15px] text-white tracking-tight">
                  {t('brand.initials')}
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading font-semibold text-[15px] text-white tracking-tight">
                  {t('brand.name')}
                </span>
                <span className="mt-1 text-[10px] font-medium tracking-[0.14em] uppercase text-slate-400">
                  {t('brand.role')}
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.blurb')}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-slate-300">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-accent" />
              
              {t('footer.availability')}
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-heading font-semibold text-sm text-white mb-4">
              {t('footer.quickLinks')}
            </h2>
            <ul className="space-y-2.5">
              {navLinks.map((link) =>
              <li key={link.path}>
                  <Link
                  to={link.path}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-150">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Direct contact */}
          <div className="md:col-span-4">
            <h2 className="font-heading font-semibold text-sm text-white mb-4">
              {t('footer.contact')}
            </h2>
            <ul className="space-y-3">
              {contactLinks.map((item) =>
              <li key={item.value + item.href}>
                  <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-150">
                  
                    <item.icon
                    size={16}
                    className="text-slate-500 group-hover:text-accent transition-colors duration-150" />
                  
                    <span dir="ltr">{item.value}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs text-slate-500">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>);

}