import React, { useEffect, createElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const routeKeyMap: Record<string, string> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/projects': 'projects',
  '/contact': 'contact'
};
function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
function setHtmlLangAttr(
content: string,
attr: 'property' | 'name',
key: string)
{
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
export function SEO() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const isRtl = i18n.language === 'ar';
    // Document-level language + direction for RTL + SEO
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    const pageKey = routeKeyMap[pathname] ?? 'home';
    const title = t(`meta.${pageKey}.title`);
    const description = t(`meta.${pageKey}.description`);
    document.title = title;
    setMetaTag('description', description);
    // Open Graph locale + localized title/description
    setHtmlLangAttr(isRtl ? 'ar_SA' : 'en_US', 'property', 'og:locale');
    setHtmlLangAttr(title, 'property', 'og:title');
    setHtmlLangAttr(description, 'property', 'og:description');
  }, [pathname, i18n.language, t]);
  return null;
}