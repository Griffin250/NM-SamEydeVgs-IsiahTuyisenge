import { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div 
      onClick={toggleTheme}
      style={{
        padding: '0.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {theme === 'light' ? (
        <Moon size={20} color="var(--primary-color)" />
      ) : (
        <Sun size={20} color="var(--primary-color)" />
      )}
    </div>
  );
};

export default ThemeToggle;