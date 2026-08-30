import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRightIcon,
  BotIcon,
  MessageSquareIcon,
  BrainCircuitIcon,
  LayersIcon,
  ServerIcon,
  Code2Icon,
  DatabaseIcon,
  GaugeIcon,
  CloudIcon,
  ClipboardCheckIcon,
  RocketIcon,
  GlobeIcon } from
'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

interface ServiceItem {
  title: string;
  description: string;
}

const SERVICE_ICONS = [
BotIcon,
MessageSquareIcon,
BrainCircuitIcon,
LayersIcon,
ServerIcon,
Code2Icon,
DatabaseIcon,
GaugeIcon,
CloudIcon,
ClipboardCheckIcon,
RocketIcon,
GlobeIcon];


export function Services() {
  const { t } = useTranslation();

  const services = t('services.items', {
    returnObjects: true
  }) as ServiceItem[];

  return (
    <main className="w-full">
      <PageHeader
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        subtitle={t('services.subtitle')} />
      

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.05)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            
            {services.map((service, index) => {
              const Icon = SERVICE_ICONS[index] ?? BotIcon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  className="flex flex-col">
                  
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-bg-light border border-slate-200 grid place-items-center flex-shrink-0">
                      <Icon size={18} className="text-secondary" />
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.16em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading font-semibold text-lg text-primary tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 text-[15px] text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.article>);

            })}
          </motion.div>
        </div>
      </section>

      {/* Scoping note */}
      <section className="bg-bg-light border-t border-slate-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="max-w-3xl">
            
            <motion.h2
              variants={fadeUp}
              className="font-heading font-semibold text-2xl sm:text-3xl text-primary tracking-tight leading-tight">
              
              {t('services.note.title')}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base text-slate-600 leading-relaxed">
              
              {t('services.note.description')}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                
                {t('services.note.button')}
                <ArrowRightIcon size={18} className="rtl:rotate-180" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>);

}