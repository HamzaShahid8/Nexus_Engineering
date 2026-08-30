import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRightIcon,
  BrainCircuitIcon,
  LayersIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CompassIcon } from
'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CtaBand } from '../components/CtaBand';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

interface Stat {
  value: string;
  label: string;
}

interface TitledItem {
  title: string;
  description: string;
}

const EXPERTISE_ICONS = [
BrainCircuitIcon,
LayersIcon,
ServerIcon,
DatabaseIcon,
CloudIcon,
CompassIcon];


export function Home() {
  const { t } = useTranslation();

  const stats = t('home.stats', {
    returnObjects: true
  }) as Stat[];

  const expertise = t('home.expertise.items', {
    returnObjects: true
  }) as TitledItem[];

  const steps = t('home.process.steps', {
    returnObjects: true
  }) as TitledItem[];

  const panelItems = t('home.hero.panel.items', {
    returnObjects: true
  }) as Array<{
    label: string;
    value: string;
  }>;

  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-accent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-0 md:pt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.08)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Positioning */}
            <div className="lg:col-span-7">
              <motion.p
                variants={fadeUp}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-medium text-slate-200">
                
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-accent" />
                
                {t('home.hero.badge')}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-7 font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.15] tracking-tight">
                
                {t('home.hero.headlineLead')}{' '}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {t('home.hero.headlineAccent')}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                
                {t('home.hero.subheadline')}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col sm:flex-row gap-3">
                
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-white font-semibold rounded-lg shadow-lg shadow-secondary/20 transition-colors duration-150 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                  
                  {t('home.hero.primaryCta')}
                  <ArrowRightIcon size={18} className="rtl:rotate-180" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-white font-semibold rounded-lg transition-colors duration-150 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
                  
                  {t('home.hero.secondaryCta')}
                </Link>
              </motion.div>
            </div>

            {/* Engagement snapshot */}
            <motion.aside
              variants={fadeUp}
              className="lg:col-span-5 w-full rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-7">
              
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                {t('home.hero.panel.title')}
              </h2>
              <dl className="mt-5 divide-y divide-white/10">
                {panelItems.map((item) =>
                <div key={item.label} className="py-3.5 first:pt-0 last:pb-0">
                    <dt className="text-[11px] font-medium tracking-wide uppercase text-slate-400">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm text-white leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                )}
              </dl>
            </motion.aside>
          </motion.div>

          {/* Credibility band */}
          <motion.dl
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.06)}
            className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            
            {stats.map((stat, index) =>
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`py-6 lg:py-8 lg:px-8 lg:first:ps-0 ${index % 2 === 1 ? 'ps-6 lg:ps-8 border-s border-white/10' : ''} ${index >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''} ${index === 2 ? 'lg:border-s lg:border-white/10' : ''}`}>
              
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading font-semibold text-xl sm:text-2xl text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="block mt-2 text-xs sm:text-[13px] text-slate-400 leading-snug">
                    {stat.label}
                  </span>
                </dd>
              </motion.div>
            )}
          </motion.dl>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}>
            
            <SectionHeading
              eyebrow={t('home.expertise.eyebrow')}
              title={t('home.expertise.title')}
              subtitle={t('home.expertise.subtitle')} />
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {expertise.map((item, index) => {
                const Icon = EXPERTISE_ICONS[index] ?? BrainCircuitIcon;
                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    className="flex flex-col">
                    
                    <span className="w-11 h-11 rounded-lg bg-primary grid place-items-center flex-shrink-0">
                      <Icon size={20} className="text-white" />
                    </span>
                    <h3 className="mt-5 font-heading font-semibold text-lg text-primary tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.article>);

              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement model */}
      <section className="bg-bg-light border-y border-slate-200 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}>
            
            <SectionHeading
              eyebrow={t('home.process.eyebrow')}
              title={t('home.process.title')}
              subtitle={t('home.process.subtitle')} />
            

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, index) =>
              <motion.li
                key={step.title}
                variants={fadeUp}
                className="relative">
                
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-md bg-white border border-slate-200 grid place-items-center font-heading font-semibold text-sm text-secondary flex-shrink-0">
                      {index + 1}
                    </span>
                    {index < steps.length - 1 ?
                  <span
                    aria-hidden="true"
                    className="hidden lg:block flex-1 h-px bg-slate-200" /> :

                  null}
                  </div>
                  <h3 className="mt-5 font-heading font-semibold text-base text-primary tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.li>
              )}
            </ol>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        button={t('home.cta.button')} />
      
    </main>);

}