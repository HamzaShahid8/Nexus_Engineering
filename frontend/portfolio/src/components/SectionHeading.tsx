import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mb-12">
      {eyebrow ?
      <motion.p
        variants={fadeUp}
        className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary mb-3">
        
          {eyebrow}
        </motion.p> :
      null}
      <motion.h2
        variants={fadeUp}
        className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-primary leading-tight tracking-tight">
        
        {title}
      </motion.h2>
      {subtitle ?
      <motion.p
        variants={fadeUp}
        className="mt-4 text-base text-slate-600 leading-relaxed">
        
          {subtitle}
        </motion.p> :
      null}
    </div>);

}