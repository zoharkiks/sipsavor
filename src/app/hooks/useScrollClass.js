import { useState, useEffect } from 'react';

const useScrollClass = (threshold,className) => {
  const [scrollClass, setScrollClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > threshold) {
        setScrollClass(`${className}`);
      } else {
        setScrollClass('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollClass;
};

export default useScrollClass;