import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeContextType } from './ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext) as ThemeContextType | undefined;
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
