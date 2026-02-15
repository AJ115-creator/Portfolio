import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../utils/animations';

const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    if (sectionRef.current) {
      animations.section.fadeInUp(sectionRef.current);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'N8N AI News Automation',
      description: 'An automated news aggregation system that collects AI-related content from multiple sources, processes it through AI summarization, and delivers curated news via Telegram.',
      longDescription: 'This project demonstrates advanced workflow automation using the n8n platform. It integrates multiple APIs including GNews and NewsAPI to collect the latest AI-related articles, processes them through Google Gemini 2.5 Pro for intelligent summarization, and delivers personalized news digests via Telegram integration. The system runs daily with scheduled triggers and includes data processing pipelines for content filtering and multi-channel delivery.',
      image: '/api/news-automation.svg',
      github: 'https://github.com/AJ115-creator/N8N-AI-News-Aggregator',
      demo: null,
      technologies: ['N8N', 'GNews API', 'NewsAPI', 'Google Gemini 2.5 Pro', 'Telegram API', 'Workflow Automation'],
      highlights: [
        'Automated news aggregation with 100% coverage',
        '90% reduction in manual content curation time',
        'Daily scheduled execution with real-time distribution',
        'Multi-source API integration and data processing'
      ],
      features: [
        'Multi-Source News Aggregation',
        'AI-Powered Content Summarization',
        'Automated Scheduling (Daily 10 AM IST)',
        'Telegram Integration',
        'Content Filtering & Processing',
        'Scalable Workflow Architecture'
      ],
      category: 'AI/ML Automation'
    },
    {
      id: 2,
      title: 'Gastrointestinal Polyp Segmentation',
      description: 'A deep learning solution for automatic segmentation of gastrointestinal polyps in colonoscopy images using Attention U-Net architecture.',
      longDescription: 'This medical AI project focuses on early detection of gastrointestinal polyps through advanced computer vision techniques. Built using PyTorch and Attention U-Net architecture, it achieves state-of-the-art performance on the Kvasir-SEG benchmark dataset. The system includes automated dataset preprocessing, extensive data augmentation, and optimized training with mixed precision for efficient GPU utilization.',
      image: '/api/medical-ai.svg',
      github: 'https://github.com/AJ115-creator/Gastrointestinal-Polyp-Segmentation',
      demo: null,
      technologies: ['Python', 'PyTorch', 'Attention U-Net', 'CUDA AMP', 'Grad-CAM', 'TensorBoard', 'OpenCV', 'Albumentations'],
      highlights: [
        '0.92 Dice score and 0.89 IoU on Kvasir-SEG dataset',
        '40% GPU memory reduction with CUDA AMP optimization',
        '25% faster training per epoch',
        '5x faster clinical review workflows'
      ],
      features: [
        'Attention U-Net Deep Learning Pipeline',
        'Automated Dataset Preprocessing',
        'Extensive Data Augmentation',
        'Mixed Precision Training',
        'Grad-CAM Visual Explanations',
        'Batch Processing CLI'
      ],
      category: 'Medical AI'
    },
    {
      id: 3,
      title: 'Rice Disease Detection System',
      description: 'A comprehensive system for detecting diseases in rice plants using CNN and Random Forest algorithms with real-time web interface.',
      longDescription: 'This agricultural AI solution combines computer vision and machine learning to help farmers detect rice plant diseases early. The system uses TensorFlow for CNN-based image analysis and Scikit-learn for Random Forest classification of environmental data. It features a React-based web interface with Firebase authentication and real-time image processing capabilities.',
      image: '/api/agriculture-ai.svg',
      github: 'https://github.com/AJ115-creator/Rice-Disease-Detection-system',
      demo: 'https://rice-disease-detection-system-dool.vercel.app/',
      technologies: ['Python', 'React', 'Tailwind CSS', 'FastAPI', 'TensorFlow', 'Scikit-Learn', 'Firebase', 'NumPy', 'Pandas'],
      highlights: [
        'High accuracy disease detection using CNN',
        'Real-time image processing and analysis',
        'Firebase authentication and data security',
        'Responsive web interface with Tailwind CSS'
      ],
      features: [
        'CNN + Random Forest Hybrid Model',
        'Real-time Image Upload & Analysis',
        'Firebase Authentication (Email/Google)',
        'Environmental Data Integration',
        'Responsive React Interface',
        'FastAPI Backend Integration'
      ],
      category: 'Agricultural AI'
    },
    {
      id: 4,
      title: 'Self-Tracking Analytics Dashboard',
      description: 'A meta-analytics dashboard that tracks its own usage - every filter change and chart click becomes a data point for analysis.',
      longDescription: 'This unique analytics platform implements the meta-analytics concept where the dashboard tracks its own usage patterns. Built with React + TypeScript frontend and FastAPI backend, it features JWT authentication via Supabase, interactive Recharts visualizations where clicking a bar chart drives a line chart to show time trends, and cookie-based filter persistence. Custom CORS middleware handles dynamic Vercel preview deployment origins.',
      image: '/dashboard.png',
      github: 'https://github.com/AJ115-creator/Self-Tracking-Dashboard',
      demo: 'https://self-tracking-dashboard-4pdw.vercel.app/',
      technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase', 'Vercel', 'Recharts', 'JWT Auth'],
      highlights: [
        'Meta-analytics: dashboard tracks its own usage',
        'Interactive charts with drill-down (bar → line)',
        'Filter persistence via cookies across sessions',
        'Custom CORS for dynamic Vercel preview origins'
      ],
      features: [
        'Real-time Event Tracking (useTracking hook)',
        'Dynamic Aggregation Queries (date/age/gender)',
        'JWT Auth with Supabase Integration',
        'Database Seeding Script for Demo Data',
        'Responsive Dark UI with Recharts',
        'RESTful API (/auth, /track, /analytics)'
      ],
      category: 'Full-Stack Analytics'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI/ML Automation':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Medical AI':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Agricultural AI':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Full-Stack Analytics':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Innovative solutions showcasing my expertise in AI/ML, Computer Vision, and Full-Stack Development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="card overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Project Image/Visual */}
                  <motion.div
                    className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="aspect-video flex items-center justify-center p-8">
                      {/* Project Logo */}
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                          {project.id === 1 && (
                            <img
                              src="/n8n.png"
                              alt="N8N Logo"
                              className="absolute inset-0 w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          )}
                          {project.id === 1 && (
                            <div style={{ display: 'none' }} className="w-24 h-24 bg-primary-600 rounded-full items-center justify-center">
                              <span className="text-white text-lg font-bold">N8N</span>
                            </div>
                          )}
                          {project.id === 2 && (
                            <img
                              src="/gastro.png"
                              alt="Gastro Logo"
                              className="w-24 h-24 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                          )}
                          {project.id === 2 && (
                            <div style={{ display: 'none' }} className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-lg font-bold">AI</span>
                            </div>
                          )}
                          {project.id === 3 && (
                            <img
                              src="/rice.jpg"
                              alt="Rice Logo"
                              className="w-24 h-24 object-contain rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                              }}
                            />
                          )}
                          {project.id === 3 && (
                            <div style={{ display: 'none' }} className="w-24 h-24 bg-yellow-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-lg font-bold">🌾</span>
                            </div>
                          )}
                          {project.id === 4 && (
                            <img
                              src="/dashboard.png"
                              alt="Dashboard Preview"
                              className="absolute inset-0 w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          )}
                          {project.id === 4 && (
                            <div style={{ display: 'none' }} className="w-24 h-24 bg-purple-600 rounded-full items-center justify-center">
                              <span className="text-white text-lg font-bold">📊</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300">
                          {project.category}
                        </h3>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-primary-600 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-center text-white">
                        <p className="text-lg font-semibold mb-2">View Project</p>
                        <div className="flex space-x-4 justify-center">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-3 uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-sm text-dark-600 dark:text-dark-400">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-3 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-full text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-lg hover:bg-dark-800 dark:hover:bg-gray-100 transition-colors duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View Code</span>
                      </motion.a>

                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 transition-all duration-300 text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects.
          </p>
          <motion.a
            href="https://github.com/AJ115-creator"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
