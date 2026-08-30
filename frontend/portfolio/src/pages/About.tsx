import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { CtaBand } from '../components/CtaBand';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

interface Principle {
  title: string;
  description: string;
}

export function About() {
  const { t } = useTranslation();

  const competencies = t('about.competencies.items', {
    returnObjects: true
  }) as string[];

  const principles = t('about.values.items', {
    returnObjects: true
  }) as Principle[];

  return (
    <main className="w-full">
      <PageHeader
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        subtitle={t('about.lead')} />
      

      {/* Narrative */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            <div className="lg:col-span-8 space-y-6">
              <motion.p
                variants={fadeUp}
                className="text-[17px] text-slate-600 leading-relaxed">
                
                {t('about.p1')}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[17px] text-slate-600 leading-relaxed">
                
                {t('about.p2')}
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[17px] text-slate-600 leading-relaxed">
                
                {t('about.p3')}
              </motion.p>
            </div>

            <motion.aside
              variants={fadeUp}
              className="lg:col-span-4 rounded-xl border border-slate-200 bg-bg-light p-6 h-fit">
              
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary">
                {t('about.competencies.eyebrow')}
              </h2>
              <ul className="mt-5 space-y-3">
                {competencies.map((item) =>
                <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon
                    size={16}
                    className="text-accent mt-0.5 flex-shrink-0" />
                  
                    <span className="text-sm text-slate-700 leading-snug">
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </motion.aside>
          </motion.div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="bg-bg-light border-y border-slate-200 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer()}>
            
            <SectionHeading
              eyebrow={t('about.values.eyebrow')}
              title={t('about.values.title')} />
            

            <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {principles.map((principle) =>
              <motion.div key={principle.title} variants={fadeUp}>
                  <dt className="font-heading font-semibold text-lg text-primary tracking-tight">
                    <span
                    aria-hidden="true"
                    className="block w-8 h-0.5 bg-gradient-to-r from-secondary to-accent mb-4 rounded-full" />
                  
                    {principle.title}
                  </dt>
                  <dd className="mt-2.5 text-[15px] text-slate-600 leading-relaxed">
                    {principle.description}
                  </dd>
                </motion.div>
              )}
            </dl>
          </motion.div>
        </div>
      </section>

      <CtaBand
        title={t('home.cta.title')}
        description={t('home.cta.description')}
        button={t('home.cta.button')} />
      
    </main>);

}