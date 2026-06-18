import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Bot,
  MessageSquare,
  Code2,
  Layers,
  Server,
  Database,
  Globe,
  Zap } from
'lucide-react';
export function Services() {
  const { t } = useTranslation();
  const serviceItems = t('services.items', {
    returnObjects: true
  }) as Array<{
    title: string;
    description: string;
  }>;
  const icons = [
  Zap,
  MessageSquare,
  Code2,
  Layers,
  Server,
  Database,
  Globe,
  Bot];

  const services = serviceItems.map((item, index) => ({
    ...item,
    icon: icons[index]
  }));
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
            
            {t('services.title')}
          </motion.h1>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {services.map((service, index) =>
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.2
                }
              }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all backdrop-blur-sm">
              
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>);

}