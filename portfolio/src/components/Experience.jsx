import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../utils/animations';

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      animations.section.fadeInUp(sectionRef.current);
    }
    if (timelineRef.current) {
      animations.timeline.reveal(timelineRef.current.children);
    }
  }, []);

  const experiences = [
    {
      id: 1,
      company: 'Synapse Health Tech',
      position: 'Associate Data Scientist',
      period: 'June 2025 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: [
        'Leading development of Bankability eye-tracking solution for banking applications using Kotlin and MediaPipe libraries',
        'Implementing multiple linear regression algorithms for precise gaze tracking and user behavior analysis, achieving 85-90% accuracy',
        'Architected and developed FastAPI backend with WebSocket integration for real-time image segmentation and processing',
        'Engineered Dental Radiograph Analysis system integrating two PyTorch models for tooth numbering and disease prediction',
        'Deployed systems using Docker containers on AWS ECR and ECS, ensuring scalable production environments'
      ],
      technologies: ['Python', 'PyTorch', 'FastAPI', 'WebSocket', 'OpenCV', 'MediaPipe', 'Kotlin', 'AWS', 'Docker', 'Groq API'],
      achievements: ['85-90% accuracy in gaze prediction', '90% accuracy in disease diagnosis', '40% GPU memory reduction', 'Sub-second response times']
    },
    {
      id: 2,
      company: 'Aspirare Communications',
      position: 'Software Engineering Intern',
      period: 'January 2025 - April 2025',
      location: 'Bengaluru, Karnataka',
      type: 'Internship',
      description: [
        'Developed and maintained Field Service Management System using React-native, React, and FastAPI',
        'Integrated Google Maps API and GCP for location-based services and data processing',
        'Collaborated with cross-functional teams to optimize business processes and improve system efficiency',
        'Implemented real-time tracking and management features for field service operations'
      ],
      technologies: ['React', 'React Native', 'FastAPI', 'Google Maps API', 'GCP', 'JavaScript', 'Python'],
      achievements: ['Improved system efficiency', 'Enhanced user experience', 'Real-time tracking implementation']
    },
    {
      id: 3,
      company: 'Tata Consultancy Services',
      position: 'Project Intern',
      period: 'May 2024 - June 2024',
      location: 'Noida, Uttar Pradesh',
      type: 'Internship',
      description: [
        'Engineered an internal TCS project using FastAPI, React, and SQLite',
        'Optimized API response time by 30% through efficient database queries and caching strategies',
        'Optimized cloud deployment strategy on Azure, improving scalability and reducing downtime',
        'Diagnosed API inefficiencies, reducing server response time and enhanced UX',
        'Presented technical insights to the leadership team, receiving recognition for architectural improvements'
      ],
      technologies: ['FastAPI', 'React', 'SQLite', 'Azure', 'Python', 'JavaScript', 'SQL'],
      achievements: ['30% API response time improvement', 'Enhanced scalability', 'Leadership recognition']
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Building innovative solutions and driving impact through technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          <div ref={timelineRef} className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                  <motion.div
                    className="card p-6 hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {exp.id === 1 && (
                            <img
                              src="/synapse.png"
                              alt="Synapse Health Tech Logo"
                              className="w-12 h-12 object-contain rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          )}
                          {exp.id === 1 && (
                            <div style={{ display: 'none' }} className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">SHT</span>
                            </div>
                          )}
                          {exp.id === 2 && (
                            <img
                              src="/aspirare.png"
                              alt="Aspirare Communications Logo"
                              className="w-12 h-12 object-contain rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          )}
                          {exp.id === 2 && (
                            <div style={{ display: 'none' }} className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">AC</span>
                            </div>
                          )}
                          {exp.id === 3 && (
                            <img
                              src="/tcs-logo.png"
                              alt="TCS Logo"
                              className="w-12 h-12 object-contain rounded-lg"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          )}
                          {exp.id === 3 && (
                            <div style={{ display: 'none' }} className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">TCS</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-dark-600 dark:text-dark-400 mb-4">
                      <span className="font-medium">{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Key Achievements:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-xs text-green-700 dark:text-green-400"
                          >
                            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
            Interested in working together? Let's discuss how I can contribute to your team.
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
