import { motion } from 'framer-motion';
import styled from 'styled-components';
import { textColor } from '../../style';

const lineWidth = 35;
const lineHeight = 3;
const containerHeight = 25;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: ${containerHeight}px;
  cursor: pointer;
`;

const Line = styled(motion.div)`
  width: ${lineWidth}px;
  height: ${lineHeight}px;
  background-color: ${textColor};
`;

const nonMiddleLinesAnim = {
  isOpenAnimeUp: {
    width: lineWidth,
    rotate: 45,
    y: containerHeight / 2 - lineHeight / 2, // this formula to keep the lines crossing in the middle and no matter containerHeight is
    transition: { duration: 1 },
  },
  isOpenAnimeBottom: {
    width: lineWidth,
    rotate: -45,
    y: -(containerHeight / 2 - lineHeight / 2), // this formula to keep the lines crossing in the middle and no matter containerHeight is
    transition: { duration: 1 },
  },
  isCloseAnimeUp: {
    width: [lineWidth, lineWidth * 0.7, lineWidth],
    transition: { duration: 4, repeat: Infinity, repeatDelay: 0.5 },
  },
  isCloseAnimeBottom: {
    width: [lineWidth, lineWidth * 0.7, lineWidth],
    transition: { duration: 4, repeat: Infinity, repeatDelay: 0.5 },
  },
};

const middleLineAnime = {
  isOpenAnime: { opacity: 0 },
  isCloseAnime: {
    width: [lineWidth * 0.7, lineWidth, lineWidth * 0.7],
    transition: { duration: 4, repeat: Infinity, repeatDelay: 0.5 },
  },
};
function BurgerMenuIcon({ props }) {
  //write code here
  const { isOpen, setIsOpen } = props;
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container onClick={toggleMenu}>
      {/* First Line */}
      <Line
        animate={isOpen ? 'isOpenAnimeUp' : 'isCloseAnimeUp'}
        variants={nonMiddleLinesAnim}
        transition={{ duration: 1 }}
      />

      {/* Second Line */}
      <Line
        variants={middleLineAnime}
        animate={isOpen ? 'isOpenAnime' : 'isCloseAnime'}
        transition={{ duration: 1 }}
      />
      {/* Third Line */}
      <Line
        animate={isOpen ? 'isOpenAnimeBottom' : 'isCloseAnimeBottom'}
        variants={nonMiddleLinesAnim}
        transition={{ duration: 1 }}
      />
    </Container>
  );
}

export default BurgerMenuIcon;
