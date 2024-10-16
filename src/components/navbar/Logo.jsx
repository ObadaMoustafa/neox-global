import styled from 'styled-components';
import { navHeight, navMenuZIndex } from '../../style';
import { motion } from 'framer-motion';

const LogoEl = styled(motion.div)`
  height: ${navHeight - 10}px;
  z-index: ${navMenuZIndex + 1};
  flex-grow: 2;

  img {
    display: block;
    height: 100%;
    margin: auto;
  }
`;
function Logo() {
  //write code here

  return (
    <LogoEl>
      <img
        src="https://cms.premiumswebsites.nl/userfiles/neoxgroupbv.com/images/logo-01.png"
        alt=""
      />
    </LogoEl>
  );
}

export default Logo;
