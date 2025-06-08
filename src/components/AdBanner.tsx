import React from 'react';

interface AdBannerProps {
  position: 'top' | 'sidebar' | 'footer';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, className = '' }) => {
  const getAdSize = () => {
    switch (position) {
      case 'top':
        return 'h-24 w-full max-w-4xl';
      case 'sidebar':
        return 'h-64 w-full max-w-xs';
      case 'footer':
        return 'h-20 w-full max-w-2xl';
      default:
        return 'h-24 w-full';
    }
  };

  return (
    <div className={`${getAdSize()} bg-gray-100 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center ${className} transition-colors duration-200`}>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm font-medium">Advertisement</p>
        <p className="text-xs">Google AdSense Placeholder</p>
      </div>
    </div>
  );
};

export default AdBanner;