import styled from 'styled-components';
import { navHeight, textColor, titleColor } from '../../style';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TheButton = styled(motion.a)`
  height: ${navHeight - 15}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  span {
    cursor: pointer;
    display: flex;
  }
`;

const variants = {
  originalMouseIn: { y: -20, opacity: 0, display: 'none' },
  originalMouseOut: { y: 0, opacity: 1, display: 'flex' },
  secondaryMouseOut: { y: 20, opacity: 0, display: 'none' },
};

const duration = 0.09;

function FlipButton({ children, fn, href, width }) {
  // to animate children when hovering the parent
  const [isHover, setIsHover] = useState(false);
  const handleMouseIn = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <TheButton
      href={href}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      style={{ width }}
    >
      {/* TEXT */}
      <motion.span
        variants={variants}
        initial="originalMouseOut"
        animate={isHover ? 'originalMouseIn' : 'originalMouseOut'}
        transition={{ duration }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{ color: textColor }}
      >
        {children}
      </motion.span>
      <motion.span
        onClick={fn}
        variants={variants}
        initial="secondaryMouseOut"
        animate={isHover ? 'originalMouseOut' : 'secondaryMouseOut'}
        transition={{ duration }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{ color: titleColor }}
      >
        {children}
      </motion.span>
    </TheButton>
  );
}

export default FlipButton;
