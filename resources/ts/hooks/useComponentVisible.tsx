import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLElement | null>(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}