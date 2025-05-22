import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
            I've had the opportunity to work with some amazing companies as an intern. Here's a summary of my professional experience.
          </p>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-900 transform md:translate-x-[-50%]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 md:mb-0 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              } ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'} md:w-1/2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 z-10 transform translate-y-[-50%] right-[-15px] md:right-auto md:left-[0] md:translate-x-[-50%]"></div>

              {/* Timeline card for mobile */}
              <div className="relative md:hidden pl-10 mb-8">
                <div className="absolute left-0 top-[10px] w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 z-10"></div>
                <div className="card p-5 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {exp.position}
                    </h3>
                    <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium flex items-center mb-3">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline card for desktop */}
              <div className="hidden md:block">
                <div className="mb-2 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-end">
                  <Calendar size={14} className={`${index % 2 === 0 ? 'ml-1' : 'mr-1'}`} />
                  <span>{exp.duration}</span>
                </div>
                <div className={`card p-5 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'ml-0 mr-6' : 'ml-6 mr-0'}`}>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium flex items-center mb-3">
                    <Briefcase size={16} className="mr-2" />
                    {exp.company}
                  </p>
                  <ul className={`list-disc space-y-1 text-gray-600 dark:text-gray-400 text-sm mb-3 ${index % 2 === 0 ? 'mr-4 text-right' : 'ml-4 text-left'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={index % 2 === 0 ? 'list-inside' : 'ml-4'}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-2 mt-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;