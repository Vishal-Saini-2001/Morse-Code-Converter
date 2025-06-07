import React from 'react';
import { Radio } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Radio className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Morse Code Converter
            </h1>
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            morsecodeconverter.tech
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;