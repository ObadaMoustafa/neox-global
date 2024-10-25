import styled from 'styled-components';
import Image from './Image';
import gear from '../images/grey-gear.png';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const DIV = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  font-size: 15pt;
`;

const GearPhoto = styled(motion.create(Image))`
  width: 50px;
`;

const gearVariants = {
  init: { opacity: 0, rotate: 0 },
  show: { opacity: 1, rotate: 360 },
};

function HoldingWork() {
  //write code here

  return (
    <DIV>
      <GearPhoto
        src={gear}
        variants={gearVariants}
        animate="show"
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      <AnimatedText text="I stopped working on this project until further notice" />
    </DIV>
  );
}

export default HoldingWork;
