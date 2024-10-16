import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const AnimatedMultiText = ({ className, textArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === textArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change sentence every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <AnimatedText
          className={className}
          key={currentIndex}
          text={textArr[currentIndex]}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedMultiText;
