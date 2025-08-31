import React from 'react';
import { Radio, Zap, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg">
              <Radio className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Morse Code Converter
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 hidden md:block">
                Free Online Telegraph Code Translator • Text ↔ Morse
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4 text-green-500" />
                <span>Real-time</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>Free Tool</span>
              </div>
            </div>
            <ThemeToggle />
            <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400 font-medium">
              morsecodeconverter.tech
            </div>
          </div>
        </div>

        {/* Navigation breadcrumb for SEO */}
        <nav className="hidden md:block pb-2" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <a href="#home" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Home</a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <a href="#converter" className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">Morse Code Tools</a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">Blog</a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;