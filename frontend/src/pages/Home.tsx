import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '../../node_modules/react-i18next';
import { Sparkles, Code, Server, Cloud, Database, Layout } from 'lucide-react';
export function Home() {
  const { t } = useTranslation();
  const stats = t('home.stats', {
    returnObjects: true
  }) as string[];
  const expertiseItems = t('home.expertise.items', {
    returnObjects: true
  }) as Array<{
    title: string;
    description: string;
  }>;
  const expertise = [
  {
    icon: Sparkles,
    ...expertiseItems[0]
  },
  {
    icon: Code,
    ...expertiseItems[1]
  },
  {
    icon: Server,
    ...expertiseItems[2]
  },
  {
    icon: Cloud,
    ...expertiseItems[3]
  }];

  const techCategories = t('home.tech.categories', {
    returnObjects: true
  }) as Record<string, string>;
  const technologies = [
  {
    category: techCategories['Backend'],
    icon: Server,
    techs: ['Python', 'Django', 'Django REST Framework', 'FastAPI']
  },
  {
    category: techCategories['Frontend'],
    icon: Layout,
    techs: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3']
  },
  {
    category: techCategories['Database'],
    icon: Database,
    techs: ['PostgreSQL', 'Supabase', 'Firebase']
  },
  {
    category: techCategories['AI'],
    icon: Sparkles,
    techs: ['OpenAI', 'LangChain', 'RAG', 'Ollama', 'LLM Integrations']
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
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wLTJ2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h1 className="font-heading font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-snug tracking-tight">
            {t('home.hero.headline')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {t('home.hero.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/projects"
              className="px-8 py-4 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
              
              {t('home.hero.viewProjects')}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-secondary transition-all hover:scale-105">
              
              {t('home.hero.getInTouch')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white">
            {stats.map((stat, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.3 + index * 0.1
              }}
              className="text-sm sm:text-base font-medium">
              
                {stat}
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              
              {t('home.expertise.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) =>
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.2
                  }
                }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all backdrop-blur-sm">
                
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              
              {t('home.tech.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((group) =>
              <motion.div
                key={group.category}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2
                  }
                }}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <group.icon className="text-white" size={20} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-primary">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) =>
                  <span
                    key={tech}
                    className="px-3 py-1 bg-bg-light text-gray-700 text-sm font-medium rounded-md border border-gray-200 hover:border-secondary hover:text-secondary transition-colors">
                    
                        {tech}
                      </span>
                  )}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>);

}