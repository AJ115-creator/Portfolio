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

  // Function to get technology icon
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
      skills: [
        { name: 'Python', level: 95, description: 'Data Science, ML, Backend Development' },
        { name: 'JavaScript', level: 90, description: 'Frontend, React, Node.js' },
        { name: 'C++', level: 85, description: 'Algorithm Implementation, Performance' },
        { name: 'SQL', level: 88, description: 'Database Design, Query Optimization' }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚡',
      skills: [
        { name: 'React', level: 92, description: 'Frontend Development, Hooks, Context' },
        { name: 'FastAPI', level: 90, description: 'REST APIs, WebSocket, Async Programming' },
        { name: 'PyTorch', level: 93, description: 'Deep Learning, Computer Vision' },
        { name: 'TensorFlow', level: 87, description: 'Neural Networks, Model Training' },
        { name: 'Tailwind CSS', level: 89, description: 'Responsive Design, Utility-first' }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI/ML Technologies',
      icon: '🤖',
      skills: [
        { name: 'Computer Vision', level: 91, description: 'Image Processing, Object Detection' },
        { name: 'OpenCV', level: 89, description: 'Image Manipulation, Feature Detection' },
        { name: 'MediaPipe', level: 85, description: 'Real-time Tracking, Pose Estimation' },
        { name: 'LLM Integration', level: 88, description: 'GPT, Gemini, API Integration' },
        { name: 'Image Segmentation', level: 90, description: 'U-Net, Attention Mechanisms' }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 85, description: 'EC2, Lambda, S3, ECR, ECS' },
        { name: 'Docker', level: 88, description: 'Containerization, Deployment' },
        { name: 'Git', level: 92, description: 'Version Control, Collaboration' },
        { name: 'N8N', level: 83, description: 'Workflow Automation, Integration' },
        { name: 'Firebase', level: 86, description: 'Authentication, Real-time Database' }
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 87, description: 'Relational Database, Complex Queries' },
        { name: 'Supabase', level: 84, description: 'Backend-as-a-Service, Real-time' },
        { name: 'SQLite', level: 90, description: 'Lightweight Database, Local Storage' },
        { name: 'Firestore', level: 85, description: 'NoSQL, Real-time Updates' }
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'TensorBoard', level: 88, description: 'Model Visualization, Monitoring' },
        { name: 'Grad-CAM', level: 85, description: 'Model Interpretability' },
        { name: 'WebSocket', level: 86, description: 'Real-time Communication' },
        { name: 'NumPy/Pandas', level: 94, description: 'Data Manipulation, Analysis' },
        { name: 'Scikit-learn', level: 89, description: 'Machine Learning, Model Selection' }
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const stats = [
    { number: '1+', label: 'Years Experience', icon: '📅' },
    { number: '6', label: 'Projects Completed', icon: '🚀' },
    { number: '2', label: 'Projects in Progress', icon: '⚙️' },
    { number: '2', label: 'Companies Worked', icon: '🏢' }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
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
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-xl mr-4`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTechIcon(skill.name) && (
                          <div className="w-4 h-4 text-primary-600 dark:text-primary-400">
                            {React.createElement(getTechIcon(skill.name))}
                          </div>
                        )}
                        <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mb-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    {/* Skill Description */}
                    <p className="text-xs text-dark-500 dark:text-dark-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
              I believe in staying current with the latest technologies and continuously expanding my skill set. 
              My approach combines hands-on experience with formal learning, ensuring I can adapt to new challenges 
              and contribute effectively to any project or team.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Problem Solving</h4>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  Analytical approach to complex technical challenges
                </p>
              </motion.div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  Creative solutions using cutting-edge technologies
                </p>
              </motion.div>
              
              <motion.div
                className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Collaboration</h4>
                <p className="text-sm text-dark-600 dark:text-dark-300">
                  Effective teamwork and knowledge sharing
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
