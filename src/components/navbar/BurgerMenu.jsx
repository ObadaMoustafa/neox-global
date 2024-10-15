import { useState } from 'react';
import BurgerMenuIcon from './BurgerMenuIcon';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { bgColor, navHeight, navMenuZIndex } from '../../style';
const MenuContainer = styled(motion.div)`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${bgColor};
  z-index: ${navMenuZIndex};
  opacity: 0.96;
`;

const menuVariants = {
  init: {
    width: 0,
    height: 0,
    borderBottomRightRadius: '500%',
    borderBottomLeftRadius: '500%',
    transition: {
      height: { duration: 0.7 },
      width: { duration: 0.5 },
      borderBottomRightRadius: { duration: 0.9 },
      borderBottomLeftRadius: { duration: 0.9 },
    },
  },
  open: {
    width: '100vw',
    height: '100vh',
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
};
function BurgerMenu() {
  //write code here
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BurgerMenuIcon props={{ isOpen, setIsOpen }} />
      <MenuContainer
        variants={menuVariants}
        initial="init"
        animate={isOpen ? 'open' : 'init'}
        transition={{
          height: { duration: 0.2 },
          width: { duration: 0.5 },
          borderBottomRightRadius: { duration: 0.6 },
        }}
      ></MenuContainer>
    </>
  );
}

export default BurgerMenu;
