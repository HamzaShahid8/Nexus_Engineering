import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PageHeader } from '../components/PageHeader';
import { CtaBand } from '../components/CtaBand';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

interface ImpactMetric {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  category: string;
  challenge: string;
  approach: string;
  impact: ImpactMetric[];
}

const TECH_STACKS = [
['Python', 'LangChain', 'OpenAI', 'Ollama', 'pgvector', 'FastAPI'],
['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Stripe', 'Redis'],
['Django REST Framework', 'PostgreSQL', 'JWT', 'Celery', 'Redis', 'Docker'],
['Python', 'FastAPI', 'OpenAI', 'PostgreSQL', 'Celery', 'Event Orchestration'],
['PostgreSQL', 'Materialized Views', 'Redis', 'FastAPI', 'React'],
['Python', 'LangChain', 'OpenAI', 'Document Parsing', 'PostgreSQL', 'React']];


export function Projects() {
  const { t } = useTranslation();

  const projects = t('projects.items', {
    returnObjects: true
  }) as CaseStudy[];

  const labels = t('projects.labels', {
    returnObjects: true
  }) as Record<string, string>;

  return (
    <main className="w-full">
      <PageHeader
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')} />
      

      <section className="bg-bg-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.08)}
            className="space-y-6">
            
            {projects.map((project, index) =>
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              
                {/* Card header */}
                <div className="px-6 sm:px-8 pt-7 pb-6 border-b border-slate-100">
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-secondary">
                    {project.category}
                  </p>
                  <h2 className="mt-3 font-heading font-semibold text-xl sm:text-2xl text-primary tracking-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 px-6 sm:px-8 py-7 space-y-6">
                    <div>
                      <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400">
                        {labels.challenge}
                      </h3>
                      <p className="mt-2.5 text-[15px] text-slate-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400">
                        {labels.approach}
                      </h3>
                      <p className="mt-2.5 text-[15px] text-slate-600 leading-relaxed">
                        {project.approach}
                      </p>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="lg:col-span-5 px-6 sm:px-8 py-7 bg-bg-light lg:border-s border-t lg:border-t-0 border-slate-100">
                    <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400">
                      {labels.impact}
                    </h3>
                    <dl className="mt-4 divide-y divide-slate-200">
                      {project.impact.map((metric) =>
                    <div
                      key={metric.label}
                      className="py-3.5 first:pt-0 last:pb-0">
                      
                          <dd className="font-heading font-semibold text-lg text-primary tracking-tight">
                            {metric.value}
                          </dd>
                          <dt className="mt-1 text-[13px] text-slate-500 leading-snug">
                            {metric.label}
                          </dt>
                        </div>
                    )}
                    </dl>
                  </div>
                </div>

                {/* Stack */}
                <div className="px-6 sm:px-8 py-5 border-t border-slate-100">
                  <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-400 mb-3">
                    {labels.stack}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {(TECH_STACKS[index] ?? []).map((tech) =>
                  <li
                    key={tech}
                    className="px-2.5 py-1 bg-bg-light text-[13px] font-medium text-slate-600 rounded-md border border-slate-200">
                    
                        {tech}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.article>
            )}
          </motion.div>
        </div>
      </section>

      <CtaBand
        title={t('projects.cta.title')}
        description={t('projects.cta.description')}
        button={t('projects.cta.button')} />
      
    </main>);

}