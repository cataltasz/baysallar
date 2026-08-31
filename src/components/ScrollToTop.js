import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    } catch (e) {
      // Fallback for environments lacking full window.scrollTo support
    }
  }, [pathname]);

  return null;
}
