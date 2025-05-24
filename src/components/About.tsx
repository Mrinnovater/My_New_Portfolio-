import React from 'react';
import { motion } from 'framer-motion';
import { skills, about } from '../data';
import { BookOpen, Calendar, GraduationCap, MapPin, Download, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <div className="w-4 h-4 rounded-full bg-primary-500"></div>,
    backend: <div className="w-4 h-4 rounded-full bg-secondary-500"></div>,
    'ai/ml': <div className="w-4 h-4 rounded-full bg-accent-500"></div>,
    tools: <div className="w-4 h-4 rounded-full bg-gray-500"></div>,
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <img
                src={about.profileImage}
                alt={about.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {about.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {about.title}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2">
                  <MapPin size={16} />
                  {about.location}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>{about.description.split('\n\n')[0]}</p>
              <p>{about.description.split('\n\n')[1]}</p>
              <p>{about.description.split('\n\n')[2]}</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-white">
                  <GraduationCap size={20} className="text-primary-500" />
                  Education
                </h4>
                <div className="pl-7">
                  <p className="font-medium text-gray-800 dark:text-white">
                    {about.education.degree} in {about.education.field}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                    <BookOpen size={16} />
                    {about.education.university}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                    <Calendar size={16} />
                    {about.education.year}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-white">
                  <Globe size={20} className="text-primary-500" />
                  Languages
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {about.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-white">
                  <Heart size={20} className="text-primary-500" />
                  Interests
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {about.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1qN-5WamqIpQMK6phdQNVJAmwES53s8PN/preview"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <Download size={18} />
                View Resume
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              My Skills
            </h3>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-3">
                {Object.keys(categoryIcons).map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    {categoryIcons[category]}
                    <span className="text-sm capitalize text-gray-600 dark:text-gray-400">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="mr-3">
                    {categoryIcons[skill.category]}
                  </div>
                  <span className="text-gray-800 dark:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
