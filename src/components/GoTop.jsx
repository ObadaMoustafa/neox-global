import {
  useScroll,
  motion,
  useMotionValueEvent,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import styled from 'styled-components';
import { btnColor, textColor } from '../style';
import { useState } from 'react';

const SVG = styled(motion.svg)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  cursor: pointer;
  scale: 0.6;
  z-index: 2;

  &:hover .up-arrow {
    transition: all 1s;
    fill: ${btnColor};
    opacity: 1;
  }
  .up-arrow {
    font-weight: 100;
    scale: 0.13;
    fill: ${textColor};
    transform: rotate(90deg) translate(-202px, -208px);
    opacity: 0.3;
    transform-origin: center;
  }

  circle {
    stroke-dashoffset: 0;
    stroke-width: 5px;
    fill: none;
  }

  .bg {
    stroke: #fafafa;
    opacity: 0.3;
  }

  &,
  .indicator {
    stroke: #fafafa;
  }
`;

const showVariants = {
  init: { opacity: 0, scale: 0, rotate: -90 },
  show: { opacity: 1, scale: 1 },
};
function GoTop() {
  //write code here
  const { scrollYProgress, scrollY } = useScroll();
  const [showBtn, setShowBtn] = useState(scrollY > 100);

  const path = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) setShowBtn(true);
    else setShowBtn(false);
  });

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {showBtn && (
        <SVG
          viewBox="0 0 100 100"
          onClick={goToTop}
          variants={showVariants}
          initial="init"
          animate="show"
          exit="init"
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <circle cx="50" cy="50" r="45" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            pathLength="1"
            className="indicator"
            style={{ pathLength: path }}
          />
          <path
            className="up-arrow"
            d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"
          ></path>
        </SVG>
      )}
    </AnimatePresence>
  );
}

export default GoTop;
