import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '../data';
import { Copy, Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const iconComponents: Record<string, React.ReactNode> = {
    github: <Github size={24} />,
    linkedin: <Linkedin size={24} />,
    twitter: <Twitter size={24} />,
    mail: <Mail size={24} />,
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mt-4">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="space-y-4">
                {/* Email Section */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                    <div className="flex items-center">
                      <p className="font-medium text-gray-800 dark:text-white">
                        shivamchodisetty333@example.com
                      </p>
                      <button
                        onClick={() => copyEmail('shivamchodisetty333@example.com')}
                        className="ml-2 p-1 text-gray-500 hover:text-primary-500 transition-colors"
                        aria-label="Copy email"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Number Section */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</p>
                    <div className="flex items-center">
                      <p className="font-medium text-gray-800 dark:text-white">
                        +91 93816 77518
                      </p>
                      <button
                        onClick={() => copyPhone('+919381677518')}
                        className="ml-2 p-1 text-gray-500 hover:text-primary-500 transition-colors"
                        aria-label="Copy phone"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <p className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Connect with me
                </p>
                <div className="flex space-x-4">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label={social.name}
                    >
                      {iconComponents[social.icon.toLowerCase()] || social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Send Me a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="P Yesu"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="palyesu243@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
