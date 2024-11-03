import styled from 'styled-components';
import Section from '../../components/Section';
import Map from './components/Map';
import { motion } from 'framer-motion';
import lookDownImage from '../../images/lookDown.png';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';

const TheMap = styled(motion.create(Map))`
  height: 100vh;
`;

const StyledLookDown = styled(LookDownImage)`
  bottom: -40px;
  right: 10%;
  //^ Tablet version
  @media only screen and (min-width: 450px) {
    bottom: -55px;
    right: 10%;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    bottom: -100px;
    right: 5%;
  }
`;
const ContactsSection = styled(Section)`
  min-height: 100vh;
`;

const mapVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
function Contacts() {
  //write code here

  return (
    <PageWrapper>
      <TheMap variants={mapVariants} initial="initial" animate="show" />
      <StyledLookDown src={lookDownImage} alt="look down" />

      <ContactsSection></ContactsSection>
    </PageWrapper>
  );
}

export default Contacts;
