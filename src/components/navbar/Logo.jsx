import styled from 'styled-components';
import { navHeight, navMenuZIndex } from '../../style';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import Image from '../Image';
import { Link } from 'react-router-dom';
import PoppingText from '../PoppingText';
import { useState } from 'react';

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LogoEl = styled(motion.create(Image))`
  height: ${navHeight * 0.7}px;
  z-index: ${navMenuZIndex + 1};
  flex-grow: 2;

  img {
    display: block;
    height: 100%;
    margin: auto;
  }
`;

const ThePoppingText = styled(motion.create(PoppingText))`
  flex-grow: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: 2.5rem;
  }
`;

const logoVariants = {
  init: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};
function Logo() {
  //write code here
  const [showText, setShowText] = useState(false);
  const { scrollY } = useScroll();

  // if I scroll more than 100px I want to show the text
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) setShowText(true);
    else setShowText(false);
  });

  return (
    <LogoContainer to="/">
      <AnimatePresence mode="wait">
        {showText ? (
          <ThePoppingText
            text={'NEOX'}
            variants={logoVariants}
            initial="init"
            animate="show"
            exit="init"
          />
        ) : (
          <LogoEl
            src="https://res.cloudinary.com/elsharbatly/image/upload/v1731528037/NEOX/Images/logo-wihtout-text_fqe9mo.png"
            alt="logo"
            variants={logoVariants}
            initial="init"
            animate="show"
            exit="init"
          />
        )}
      </AnimatePresence>
    </LogoContainer>
  );
}

export default Logo;
