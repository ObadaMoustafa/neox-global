import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { titleColor } from '../style';

const variants = {
  init: { opacity: 0, y: 100 },
  view: { opacity: 1, y: 0 },
};

const RouterLink = styled(motion.create(Link))`
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
function FlipButton2({ children, href }) {
  //write code here
  const content = [children, children];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleHover = () => setCurrentIndex(1);
  const handleLeave = () => setCurrentIndex(0);
  return (
    <RouterLink
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      to={href}
      rel="noopener noreferrer"
    >
      <AnimatePresence mode="wait">
        <motion.h4
          key={currentIndex}
          variants={variants}
          initial="init"
          animate="view"
          transition={{ duration: 0.3 }}
        >
          {content[currentIndex]}
        </motion.h4>
      </AnimatePresence>
    </RouterLink>
  );
}

export default FlipButton2;
