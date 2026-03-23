import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../utils/animations';
import ProjectModal from './ProjectModal';
import GastroViz from './GastroViz';

const Projects = () => {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (sectionRef.current) {
      animations.section.fadeInUp(sectionRef.current);
    }
  }, []);

  const projects = [
    {
      id: 5,
      title: 'Grocify — AI-Powered Grocery Management App',
      description: 'Full-stack mobile app for smart grocery management with an AI conversational agent that adds/removes items and provides analytics via natural language and voice commands.',
      longDescription: '3-tab mobile app (List, Planner, Insights) with file-based routing (Expo Router), a FastAPI REST backend with 6 CRUD endpoints + AI chat endpoint, PostgreSQL for persistence, and Redis for session management. Features a LangChain-powered conversational agent using Groq Llama 3.3 70B with tool-constrained architecture (3 bound tools: add, remove, stats) to prevent hallucinated actions. Chat history persisted in Redis with 30-min TTL for multi-turn context. Async backend with SQLAlchemy AsyncSession and connection pooling optimized for Neon serverless PostgreSQL. Light/dark theme support via CSS custom properties.',
      image: '/grocify.png',
      imageClass: 'object-contain p-4 transition-transform duration-300 hover:scale-105',
      bgGradient: 'linear-gradient(135deg, #0d3d20 0%, #1a5c2e 35%, #0f4a1a 65%, #0a2e12 100%)',
      github: 'https://github.com/AJ115-creator/Grocify',
      demo: null,
      technologies: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'LangChain', 'Groq', 'Zustand', 'NativeWind', 'Clerk', 'Neon PostgreSQL', 'Redis', 'Sentry', 'Docker'],
      highlights: [
        'AI Grocery Assistant — LangChain agent with tool-constrained architecture (add, remove, stats) preventing hallucinated actions. Redis-backed chat history with 30-min TTL.',
        'Voice Input — Cloud-based speech recognition with interim results, permission soft-prompting, and granular error handling (no-speech, network, permissions).',
        'Async Backend — FastAPI with SQLAlchemy AsyncSession and connection pooling (pool=3, overflow=5) optimized for Neon serverless PostgreSQL. Dockerized multi-stage deployment.',
        'Social Auth & Smart Notifications — Clerk OAuth (Google/Apple/GitHub) with token caching. Auto-scheduled 5-hour reminders for pending items, auto-cancelled on list completion.'
      ],
      features: [
        'AI Conversational Agent (LangChain + Groq Llama 3.3 70B)',
        'Voice Commands with Speech Recognition',
        'Real-time Analytics Dashboard (category breakdowns, priority tracking)',
        'Clerk OAuth (Google/Apple/GitHub)',
        'Zustand Store with async actions & notification side effects',
        'Dockerized FastAPI backend with Redis session management'
      ],
      category: 'Full-Stack AI Mobile App'
    },
    {
      id: 1,
      title: 'N8N AI News Automation',
      description: 'An automated news aggregation system that collects AI-related content from multiple sources, processes it through AI summarization, and delivers curated news via Telegram.',
      longDescription: 'This project demonstrates advanced workflow automation using the n8n platform. It integrates multiple APIs including GNews and NewsAPI to collect the latest AI-related articles, processes them through Google Gemini 2.5 Pro for intelligent summarization, and delivers personalized news digests via Telegram integration. The system runs daily with scheduled triggers and includes data processing pipelines for content filtering and multi-channel delivery.',
      image: '/n8n.png',
      imageClass: 'object-contain p-3 transition-transform duration-300 hover:scale-105',
      bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1054 35%, #1e0a40 65%, #120720 100%)',
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
      image: null,
      customViz: 'gastro',
      bgGradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a0a1e 40%, #0d1a12 70%, #060a0f 100%)',
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
      description: 'AI-powered web app for real-time rice plant disease diagnosis via CNN image classification and environmental risk assessment using Random Forest.',
      longDescription: 'A dual-mode detection system solving crop loss from undetected diseases. Image-Based Detection uses a custom CNN (3 Conv2D blocks: 32→64→128 filters with MaxPooling, Dropout) trained on 128x128 augmented rice leaf images, classifying into 4 categories: Bacterial Leaf Blight, Brown Spots, Leaf Smut, Healthy. Environmental Risk Analysis uses a 100-estimator Random Forest with balanced class weights on 6 features (temp, precipitation, soil pH, humidity) with StandardScaler normalization. Frontend built with React 19 + Vite 6, Tailwind CSS v4 with 50+ design tokens, dark/light mode with system preference detection, GSAP 3.14 animations (staggered entrances, floating particles), aurora gradient background (pure CSS keyframe with 4 morphing blobs), and glassmorphism UI. Firebase 12 for Google OAuth + Firestore with user-scoped security rules. Backend on FastAPI serving two ML models via REST endpoints. Deployed on Vercel (frontend) + HuggingFace Spaces (backend).',
      image: '/rice.png',
      imageClass: 'object-contain p-3 transition-transform duration-300 hover:scale-105',
      bgGradient: 'linear-gradient(135deg, #0f2a0a 0%, #1e4a0f 35%, #163820 65%, #0a1e08 100%)',
      github: 'https://github.com/AJ115-creator/Rice-Disease-Detection-system',
      demo: 'https://rice-disease.ayushjha.xyz/',
      technologies: ['React 19', 'Tailwind CSS v4', 'Vite 6', 'GSAP', 'Firebase Auth', 'Firestore', 'FastAPI', 'TensorFlow', 'Scikit-learn', 'Python', 'Vercel', 'HuggingFace Spaces'],
      highlights: [
        'Dual ML Pipeline — Custom CNN (32→64→128 filters, Dropout) for 4-class leaf image classification + 100-estimator Random Forest for environmental risk analysis on 6 features.',
        'Animated Glassmorphism UI — GSAP 3.14 staggered animations, pure CSS aurora gradient (4 morphing blobs + hue rotation), backdrop-blur cards, dark/light mode with system preference detection.',
        'Secure Per-User Data — Firebase 12 Google OAuth + Firestore with user-scoped security rules. Prediction history with type, result, timestamp binding.',
        'Modular Deployment — Frontend on Vercel edge network, FastAPI backend on HuggingFace Spaces (TensorFlow-CPU), Firestore on Google Cloud. Independent scaling per service.'
      ],
      features: [
        'CNN Image Classification (4 disease categories)',
        'Random Forest Environmental Risk Assessment',
        'React 19 + Vite 6 with Tailwind CSS v4 design system',
        'GSAP animations + CSS aurora background',
        'Firebase Google OAuth + Firestore history',
        'FastAPI dual-model REST endpoints (/predict-image, /predict-tabular)'
      ],
      category: 'Agricultural AI'
    },
    {
      id: 4,
      title: 'Self-Tracking Analytics Dashboard',
      description: 'A meta-analytics dashboard that tracks its own usage - every filter change and chart click becomes a data point for analysis.',
      longDescription: 'This unique analytics platform implements the meta-analytics concept where the dashboard tracks its own usage patterns. Built with React + TypeScript frontend and FastAPI backend, it features JWT authentication via Supabase, interactive Recharts visualizations where clicking a bar chart drives a line chart to show time trends, and cookie-based filter persistence. Custom CORS middleware handles dynamic Vercel preview deployment origins.',
      image: '/dashboard.png',
      imageClass: 'object-contain p-3 transition-transform duration-300 hover:scale-105',
      bgGradient: 'linear-gradient(135deg, #0a0f1a 0%, #0d1a2e 40%, #091422 70%, #050a14 100%)',
      github: 'https://github.com/AJ115-creator/Self-Tracking-Dashboard',
      demo: 'https://selftrackingdashboard.ayushjha.xyz',
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
      case 'Mobile App Development':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] h-full flex flex-col">
                {/* Project Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ background: project.bgGradient || 'linear-gradient(135deg, #1e3a5f, #2d5a9e)' }}
                >
                  <div className="aspect-video">
                    {project.customViz === 'gastro' ? (
                      <GastroViz />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full ${project.imageClass || 'object-cover'}`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : null}
                  </div>
                  {/* Category badge overlay */}
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 text-dark-500 dark:text-dark-400 text-xs">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-lg hover:bg-dark-800 dark:hover:bg-gray-100 transition-colors text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3 py-1.5 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 transition-all text-xs font-medium"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Demo</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center space-x-1.5 px-3 py-1.5 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors text-xs font-medium ml-auto"
                    >
                      <span>More Details</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
