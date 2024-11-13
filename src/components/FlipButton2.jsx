import { AnimatePresence, motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { titleColor } from '../style';

const variants = {
  init: { opacity: 0, y: 100 },
  view: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

const Link = styled(motion.a)`
  width: 'fit-content';
  font-size: '1.5rem';
  overflow: 'hidden';
  background-color: 'transparent';
  padding: '10px 20px';
  cursor: 'pointer';
  overflow: hidden;

  &:hover * {
    color: ${titleColor};
  }
`;

const FlipButton2 = forwardRef(({ children, href, className }, ref) => {
  const content = [children, children];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleHover = () => setCurrentIndex(1);
  const handleLeave = () => setCurrentIndex(0);
  return (
    <Link
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      href={href}
      rel="noopener noreferrer"
      ref={ref}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className={className}
          variants={variants}
          initial="init"
          animate="view"
          exit="exit"
          transition={{ duration: 0.15 }}
        >
          {content[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </Link>
  );
});

export default FlipButton2;
