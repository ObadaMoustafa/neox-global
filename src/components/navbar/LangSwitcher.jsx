import { motion } from 'framer-motion';
import Flag from 'react-world-flags';
import styled from 'styled-components';
import FlipButton from '../bottuns/FlipButton';
import { useTranslation } from 'react-i18next';

const SwitchContainer = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: small;
`;

const StyledFlag = styled(motion.div)`
  width: 100%;
  height: 100%;

  img {
    display: block;
    object-fit: cover;
  }
`;

function LangSwitcher() {
  //write code here
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const changeLang = () => {
    i18n.changeLanguage(isEnglish ? 'nl' : 'en');
  };

  const EN = (
    <SwitchContainer id="lang">
      <span>EN</span>
      <StyledFlag initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Flag code="GB" />
      </StyledFlag>
    </SwitchContainer>
  );

  const NL = (
    <SwitchContainer id="lang">
      <span>NL</span>
      <StyledFlag initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Flag code="nl" />
      </StyledFlag>
    </SwitchContainer>
  );

  return (
    <FlipButton fn={changeLang} width="33%">
      {isEnglish ? NL : EN}
    </FlipButton>
  );
}

export default LangSwitcher;
