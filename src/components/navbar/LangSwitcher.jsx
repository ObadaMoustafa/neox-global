import { AnimatePresence, motion } from 'framer-motion';
import Flag from 'react-world-flags';
import styled from 'styled-components';
import FlipButton from '../bottuns/FlipButton';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const SwitchContainer = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: small;
  font-weight: 100;
`;

const StyledFlag = styled(motion.div)`
  width: 100%;
  height: 100%;

  img {
    display: block;
    object-fit: cover;
  }
`;

const switchAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
};

function LangSwitcher() {
  //write code here
  const { i18n } = useTranslation();
  // get the current language from i18n npm

  const [isEnglish, setIsEnglish] = useState(i18n.language[0] === 'en');

  const changeLang = () => {
    i18n.changeLanguage(isEnglish ? 'nl' : 'en');
    setIsEnglish(!isEnglish);
  };

  const EN = (
    <SwitchContainer id="lang">
      <motion.span {...switchAnimation}>EN</motion.span>
      <StyledFlag {...switchAnimation}>
        <Flag code="GB" />
      </StyledFlag>
    </SwitchContainer>
  );

  const NL = (
    <SwitchContainer id="lang">
      <motion.span {...switchAnimation}>NL</motion.span>
      <StyledFlag {...switchAnimation}>
        <Flag code="nl" />
      </StyledFlag>
    </SwitchContainer>
  );

  return (
    <AnimatePresence>
      <FlipButton fn={changeLang}>
        {isEnglish && NL}
        {!isEnglish && EN}
      </FlipButton>
    </AnimatePresence>
  );
}

export default LangSwitcher;
