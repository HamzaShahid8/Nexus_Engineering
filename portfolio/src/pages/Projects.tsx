import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
export function Projects() {
  const { t } = useTranslation();
  const projectItems = t('projects.items', {
    returnObjects: true
  }) as Array<{
    title: string;
    category: string;
    description: string;
  }>;
  const techStacks = [
  ['Python', 'LangChain', 'OpenAI', 'Ollama', 'Vector Databases'],
  ['Django', 'DRF', 'React', 'PostgreSQL'],
  ['Django REST Framework', 'PostgreSQL', 'JWT', 'Celery', 'Redis'],
  ['Python', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Automation Workflows']];

  const projects = projectItems.map((item, index) => ({
    ...item,
    technologies: techStacks[index]
  }));
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
            
            {t('projects.title')}
          </motion.h1>
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
            variants={containerVariants}
            className="space-y-8">
            
            {projects.map((project, index) =>
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.2
                }
              }}
              className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
              
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-secondary to-accent text-white text-sm font-semibold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) =>
                <span
                  key={tech}
                  className="px-3 py-1 bg-bg-light text-gray-700 text-sm rounded-md border border-gray-200">
                  
                      {tech}
                    </span>
                )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>);

}