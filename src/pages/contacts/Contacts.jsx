import styled from 'styled-components';
import Section from '../../components/Section';
import Map from './components/Map';
import { motion } from 'framer-motion';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import contactsImage from '../../images/contacts.png';
import { navHeight } from '../../style';
import Parallax from '../../components/Parallax';
import AnimatedTitle from '../../components/AnimatedTitle';
import { useTranslation } from 'react-i18next';

const lookDownImage =
  'https://res.cloudinary.com/elsharbatly/image/upload/v1731131811/NEOX/Images/lookDown_xz1uoo.png';

const Header = styled(Parallax)`
  height: 40vh;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center ${navHeight - navHeight / 2}px;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    background-size: 60%;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: 80vh;
    background-size: 60%;
  }
`;
const TheMap = styled(motion.create(Map))`
  height: 100%;
`;

const StyledLookDown = styled(LookDownImage)`
  bottom: -40px;
  right: 5%;
  //^ Tablet version
  @media only screen and (min-width: 450px) {
    bottom: -55px;
    left: 20%;
    right: false;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    bottom: -100px;
    right: 5%;
  }
`;

const ContactsSection = styled(Section)`
  margin-top: 30px;
  padding-top: 0;
  min-height: 100vh;
  position: relative;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    padding-top: 50px;
  }
`;

const mapVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 2 },
  },
};
function Contacts() {
  //write code here
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <Header backgroundSrc={contactsImage}>
        {/* <TheMap variants={mapVariants} initial="initial" animate="show" /> */}
        <StyledLookDown src={lookDownImage} alt="look down" />
      </Header>
      <ContactsSection>
        <AnimatedTitle text={t('contacts.title')} delay={2} />
      </ContactsSection>
    </PageWrapper>
  );
}

export default Contacts;
