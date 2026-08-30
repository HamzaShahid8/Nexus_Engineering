import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  ClockIcon,
  GlobeIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  ArrowRightIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CONTACT } from '../data/contact';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

interface DetailItem {
  title: string;
  description: string;
}

const DETAIL_ICONS = [ClockIcon, GlobeIcon, BriefcaseIcon, ShieldCheckIcon];

export function Contact() {
  const { t } = useTranslation();

  const details = t('contact.details.items', {
    returnObjects: true
  }) as DetailItem[];

  const secondaryChannels = [
  {
    icon: MessageCircleIcon,
    label: t('contact.labels.whatsapp'),
    hint: t('contact.hints.whatsapp'),
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappHref,
    external: true
  },
  {
    icon: PhoneIcon,
    label: t('contact.labels.phone'),
    hint: t('contact.hints.phone'),
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    external: false
  }];


  return (
    <main className="w-full">
      <PageHeader
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')} />
      

      <section className="bg-bg-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.07)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Primary channel */}
            <motion.a
              variants={fadeUp}
              href={CONTACT.emailHref}
              className="group lg:col-span-7 rounded-xl bg-primary p-7 sm:p-9 flex flex-col justify-between transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
              
              <div>
                <span className="w-11 h-11 rounded-lg bg-white/10 grid place-items-center">
                  <MailIcon size={20} className="text-white" />
                </span>
                <p className="mt-6 text-xs font-semibold tracking-[0.16em] uppercase text-accent">
                  {t('contact.primary.label')}
                </p>
                <p
                  dir="ltr"
                  className="mt-3 font-heading font-semibold text-xl sm:text-2xl text-white tracking-tight break-all">
                  
                  {CONTACT.email}
                </p>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-md">
                  {t('contact.primary.hint')}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                {t('contact.primary.action')}
                <ArrowRightIcon
                  size={16}
                  className="rtl:rotate-180 transition-transform duration-150 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                
              </span>
            </motion.a>

            {/* Secondary channels */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {secondaryChannels.map((channel) =>
              <motion.a
                key={channel.label}
                variants={fadeUp}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group rounded-xl bg-white border border-slate-200 p-6 sm:p-7 transition-colors duration-150 hover:border-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-bg-light border border-slate-200 grid place-items-center flex-shrink-0">
                      <channel.icon size={18} className="text-secondary" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-heading font-semibold text-base text-primary tracking-tight">
                        {channel.label}
                      </h2>
                      <p
                      dir="ltr"
                      className="mt-1.5 text-[15px] font-medium text-secondary group-hover:text-accent transition-colors duration-150">
                      
                        {channel.value}
                      </p>
                      <p className="mt-2 text-[13px] text-slate-500 leading-snug">
                        {channel.hint}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working details */}
      <section className="bg-white border-t border-slate-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}>
            
            <motion.h2
              variants={fadeUp}
              className="font-heading font-semibold text-2xl text-primary tracking-tight mb-10">
              
              {t('contact.details.title')}
            </motion.h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {details.map((detail, index) => {
                const Icon = DETAIL_ICONS[index] ?? ClockIcon;
                return (
                  <motion.div key={detail.title} variants={fadeUp}>
                    <Icon size={20} className="text-secondary" />
                    <dt className="mt-4 font-heading font-semibold text-base text-primary tracking-tight">
                      {detail.title}
                    </dt>
                    <dd className="mt-2 text-[15px] text-slate-600 leading-relaxed">
                      {detail.description}
                    </dd>
                  </motion.div>);

              })}
            </dl>
          </motion.div>
        </div>
      </section>
    </main>);

}