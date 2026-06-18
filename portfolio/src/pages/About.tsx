import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export function About() {
  const { t } = useTranslation();
  const competencies = t('about.competencies.items', {
    returnObjects: true
  }) as string[];
  const values = t('about.values.items', {
    returnObjects: true
  }) as string[];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <main className="w-full pt-16">
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            
            {t('about.title')}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={containerVariants}
            className="space-y-6 text-lg leading-relaxed">
            
            <motion.p variants={itemVariants}>{t('about.p1')}</motion.p>
            <motion.p variants={itemVariants}>{t('about.p2')}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={containerVariants}>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading font-bold text-3xl sm:text-4xl text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              
              {t('about.competencies.title')}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {competencies.map((competency, index) =>
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05
                }}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-3">
                
                  <CheckCircle2
                  className="text-secondary flex-shrink-0"
                  size={20} />
                
                  <span className="font-medium text-gray-800">
                    {competency}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={containerVariants}>
            
            <motion.h2
              variants={itemVariants}
              className="font-heading font-bold text-3xl sm:text-4xl text-center mb-12">
              
              {t('about.values.title')}
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) =>
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -4
                }}
                className="px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                
                  {value}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>);

}