import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

interface CtaBandProps {
  title: string;
  description: string;
  button: string;
}

export function CtaBand({ title, description, button }: CtaBandProps) {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer()}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          <div className="max-w-2xl">
            <motion.h2
              variants={fadeUp}
              className="font-heading font-semibold text-2xl sm:text-3xl text-white leading-tight tracking-tight">
              
              {title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-slate-300 leading-relaxed">
              
              {description}
            </motion.p>
          </div>
          <motion.div variants={fadeUp} className="flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white font-semibold rounded-lg shadow-lg shadow-secondary/20 transition-colors duration-150 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
              
              {button}
              <ArrowRightIcon size={18} className="rtl:rotate-180" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}