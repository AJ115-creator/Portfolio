import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../utils/animations';
import {
  FaPython, FaJs, FaReact, FaDocker, FaGitAlt, FaAws, FaDatabase
} from 'react-icons/fa';
import {
  SiPytorch, SiTensorflow, SiOpencv, SiPostgresql, SiFirebase,
  SiTailwindcss, SiNumpy, SiPandas, SiScikitlearn, SiFastapi,
  SiCplusplus, SiSqlite, SiGooglecloud, SiGooglemaps, SiSocketdotio
} from 'react-icons/si';

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  const getTechIcon = (techName) => {
    const iconMap = {
      'Python': FaPython,
      'JavaScript': FaJs,
      'C++': SiCplusplus,
      'SQL': FaDatabase,
      'React': FaReact,
      'FastAPI': SiFastapi,
      'PyTorch': SiPytorch,
      'TensorFlow': SiTensorflow,
      'OpenCV': SiOpencv,
      'Tailwind CSS': SiTailwindcss,
      'AWS': FaAws,
      'Docker': FaDocker,
      'Git': FaGitAlt,
      'PostgreSQL': SiPostgresql,
      'Supabase': SiPostgresql,
      'SQLite': SiSqlite,
      'Firestore': SiFirebase,
      'TensorBoard': SiTensorflow,
      'Grad-CAM': SiTensorflow,
      'WebSocket': SiSocketdotio,
      'NumPy/Pandas': SiNumpy,
      'Scikit-learn': SiScikitlearn,
      'Computer Vision': SiOpencv,
      'MediaPipe': SiOpencv,
      'LLM Integration': SiTensorflow,
      'Image Segmentation': SiOpencv,
      'GCP': SiGooglecloud,
      'Google Maps API': SiGooglemaps
    };
    return iconMap[techName] || null;
  };

  useEffect(() => {
    if (sectionRef.current) {
      animations.section.fadeInUp(sectionRef.current);
    }
    if (skillsRef.current) {
      animations.skills.stagger(skillsRef.current.children);
    }
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'JavaScript', 'C++', 'SQL'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚡',
      skills: ['React', 'FastAPI', 'PyTorch', 'TensorFlow', 'Tailwind CSS'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI/ML Technologies',
      icon: '🤖',
      skills: ['Computer Vision', 'OpenCV', 'MediaPipe', 'LLM Integration', 'Image Segmentation'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Git', 'GCP', 'Firestore'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'Supabase', 'SQLite', 'Firestore'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['TensorBoard', 'Grad-CAM', 'WebSocket', 'NumPy/Pandas', 'Scikit-learn'],
      color: 'from-red-500 to-red-600'
    }
  ];

  const stats = [
    { number: '1+', label: 'Years Experience', icon: '📅' },
    { number: '6', label: 'Projects Completed', icon: '🚀' },
    { number: '2', label: 'Projects in Progress', icon: '⚙️' },
    { number: '3', label: 'Companies Worked', icon: '🏢' }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions across AI/ML, Web Development, and Cloud Technologies
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-dark-600 dark:text-dark-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card p-6 group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-5">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skillName) => {
                  const Icon = getTechIcon(skillName);
                  return (
                    <motion.div
                      key={skillName}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-dark-700 rounded-lg text-sm text-dark-700 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {Icon && (
                        <span className="w-4 h-4 text-primary-600 dark:text-primary-400">
                          {React.createElement(Icon)}
                        </span>
                      )}
                      <span className="font-medium">{skillName}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
