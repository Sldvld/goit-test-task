import { useEffect } from 'react';
import css from './ScrollUpButton.module.css';

export const ScrollUpButton = () => {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={css.scrollUpButton} onClick={handleClick}>
      🔝
    </button>
  );
};
