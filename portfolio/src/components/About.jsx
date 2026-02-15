import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../utils/animations';

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      animations.section.fadeInUp(sectionRef.current);
    }
    if (titleRef.current) {
      animations.section.fadeInLeft(titleRef.current);
    }
    if (contentRef.current) {
      animations.section.fadeInRight(contentRef.current);
    }
    if (skillsRef.current) {
      animations.skills.stagger(skillsRef.current.children);
    }
  }, []);

  const skills = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'JavaScript', level: 90, category: 'Programming' },
    { name: 'C++', level: 85, category: 'Programming' },
    { name: 'SQL', level: 88, category: 'Programming' },
    { name: 'React', level: 92, category: 'Frameworks' },
    { name: 'FastAPI', level: 90, category: 'Frameworks' },
    { name: 'PyTorch', level: 93, category: 'AI/ML' },
    { name: 'TensorFlow', level: 87, category: 'AI/ML' },
    { name: 'OpenCV', level: 89, category: 'AI/ML' },
    { name: 'AWS', level: 85, category: 'Cloud' },
    { name: 'Docker', level: 88, category: 'Tools' },
    { name: 'Git', level: 92, category: 'Tools' }
  ];

  const education = {
    institution: 'Birla Institute of Technology Mesra',
    degree: 'Bachelor of Technology in Information Technology',
    location: 'Ranchi, Jharkhand',
    period: 'December 2021 - May 2025',
    cgpa: '8.06',
    status: 'Completed'
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
        >
          <motion.h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            ref={contentRef}
            className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
          >
            Passionate Data Scientist with expertise in AI/ML, Computer Vision, and Full-Stack Development
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I'm an Associate Data Scientist at Synapse Health Tech, specializing in developing cutting-edge
                AI solutions for healthcare applications. With a strong foundation in machine learning, computer vision,
                and full-stack development, I'm passionate about creating intelligent systems that solve real-world problems.
              </p>

              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                My experience spans from building eye-tracking solutions for banking applications to developing
                medical imaging analysis systems. I enjoy working with technologies like PyTorch, OpenCV, React,
                and cloud platforms like AWS to bring innovative ideas to life.
              </p>

              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I have completed my B.Tech in Information Technology from BIT Mesra with a CGPA of 8.06.
                I'm always eager to learn new technologies and contribute to meaningful projects that make a difference.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                {/* College Logo */}
                <div className="flex-shrink-0">
                  <img
                    src="/bit-mesra.png"
                    alt="BIT Mesra Logo"
                    className="w-16 h-16 object-contain rounded-lg border border-gray-200 dark:border-dark-600"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{ display: 'none' }} className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center border border-gray-200 dark:border-dark-600">
                    <span className="text-white text-xs font-bold">BIT</span>
                  </div>
                </div>

                {/* Education Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-4">
                    Education
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium text-primary-600 dark:text-primary-400">
                      {education.institution}
                    </p>
                    <p className="text-dark-700 dark:text-dark-300">
                      {education.degree}
                    </p>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      {education.location} • {education.period}
                    </p>
                    <p className="text-dark-600 dark:text-dark-400 text-sm">
                      CGPA: <span className="font-semibold text-primary-600 dark:text-primary-400">
                        {education.cgpa}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            ref={skillsRef}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
              Technical Skills
            </h3>

            <div className="space-y-4">
              {['Programming', 'Frameworks', 'AI/ML', 'Cloud', 'Tools'].map((category) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="relative group"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="bg-white dark:bg-dark-800 px-4 py-2 rounded-full border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-md transition-all duration-300">
                            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                              {skill.name}
                            </span>
                          </div>

                          {/* Skill Level Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-dark-900 dark:bg-white text-white dark:text-dark-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {skill.level}% Proficiency
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-dark-900 dark:border-t-white"></div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">1+</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">6</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">2</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Projects in Progress</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3</div>
                <div className="text-sm text-dark-600 dark:text-dark-400">Companies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
