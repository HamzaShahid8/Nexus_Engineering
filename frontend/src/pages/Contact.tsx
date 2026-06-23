import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../node_modules/react-i18next';
import { Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
export function Contact() {
  const { t } = useTranslation();
  const labels = t('contact.labels', {
    returnObjects: true
  }) as Record<string, string>;
  const contactInfo = [
  {
    icon: Phone,
    label: labels['Phone'],
    value: '+92 317 4104108',
    href: 'tel:+923174104108'
  },
  {
    icon: MessageCircle,
    label: labels['WhatsApp'],
    value: '+92 317 4104108',
    href: 'https://wa.me/923174104108'
  },
  {
    icon: Mail,
    label: labels['Email'],
    value: 'hamzishahid8@gmail.com',
    href: 'mailto:hamzishahid8@gmail.com'
  },
  {
    icon: Github,
    label: labels['GitHub'],
    value: 'HamzaShahid8',
    href: 'https://github.com/HamzaShahid8'
  },
  {
    icon: Linkedin,
    label: labels['LinkedIn'],
    value: 'hamza-shahid-1',
    href: 'https://www.linkedin.com/in/hamza-shahid-1'
  }];

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
            
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-gray-100 max-w-2xl mx-auto">
            
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {contactInfo.map((contact, index) =>
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={
              contact.href.startsWith('http') ?
              'noopener noreferrer' :
              undefined
              }
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.2
                }
              }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all flex items-start gap-4 group">
              
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <contact.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1 text-gray-800">
                    {contact.label}
                  </h3>
                  <p className="text-secondary group-hover:text-accent transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            )}
          </motion.div>
        </div>
      </section>
    </main>);

}