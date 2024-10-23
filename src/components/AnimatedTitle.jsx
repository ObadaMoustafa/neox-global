import { motion } from 'framer-motion';
import styled from 'styled-components';
import AnimatedText from './AnimatedText';
import { useState } from 'react';
import { titleColor, titleFontSize } from '../style';

const TitleContainer = styled(motion.div)`
  height: fit-content;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  text-transform: uppercase;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    margin: 0;
    border-right: none;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
  }
`;

const titleContainerVariants = {
  init: { width: '4px' },
  show: { width: 'fit-content' },
};

const StyledAnimatedTitle = styled(AnimatedText)`
  color: ${titleColor};
  font-size: ${titleFontSize.mobile};
  font-weight: 700;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    font-size: ${titleFontSize.tablet};
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${titleFontSize.pc};
  }
`;
function AnimatedTitle({ text, className }) {
  //write code here
  const [showTitle, setShowTitle] = useState(false);
  const handleShowTitle = () => {
    setShowTitle(true);
  };
  return (
    <TitleContainer
      className={className}
      variants={titleContainerVariants}
      initial="init"
      whileInView="show"
      onViewportEnter={handleShowTitle}
      transition={{ width: { duration: text.length * 0.025 } }}
      viewport={{ once: true }}
    >
      {showTitle && <StyledAnimatedTitle text={showTitle ? text : ''} />}
    </TitleContainer>
  );
}

export default AnimatedTitle;
