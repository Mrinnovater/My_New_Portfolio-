import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
              Shiva<span className="text-secondary-500"> Chodisetty</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
             Problem Solver | Smart Working Personality | Innovative solutions
            </p>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center sm:justify-end">
              © {currentYear} Ch Venkata Shiva Sri's Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



