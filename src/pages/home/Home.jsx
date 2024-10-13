import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledTest = styled(motion.h1)`
  font-size: 50pt;
  color: #10105e;
`;

const motionVariants = {
  hide: { opacity: 0, scale: 0, x: 1500 },
  show: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
};
function Home() {
  //write code here

  return (
    <>
      <StyledTest initial="hide" animate="show" variants={motionVariants}>
        This is the homepage with animation
      </StyledTest>
    </>
  );
}

export default Home;
