import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative bg-primary overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-accent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer()}
          className="max-w-3xl">
          
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent mb-4">
            
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight tracking-tight">
            
            {title}
          </motion.h1>
          {subtitle ?
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            
              {subtitle}
            </motion.p> :
          null}
        </motion.div>
      </div>
    </header>);

}