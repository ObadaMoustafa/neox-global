import styled from 'styled-components';
import Section from '../../components/Section';
import Map from './components/Map';
import { motion } from 'framer-motion';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import contactsImage from '../../images/contacts.png';
import { contentFontSize, navHeight, titleColor } from '../../style';
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
  height: 350px;
  width: 100vw;
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
  position: relative;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    padding-top: 50px;
  }
`;
const ContactMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: '100%';
  margin-top: 20px;
`;

const ContactMethod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MethodTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: ${contentFontSize.mobile};
  font-weight: 400;
  text-align: center;
  color: ${titleColor};
`;

const mapVariants = {
  initial: {
    opacity: 0,
    width: 0,
  },
  show: {
    width: '100vw',
    opacity: 1,
    transition: { duration: 1 },
  },
};
function Contacts() {
  //write code here
  const { t } = useTranslation();
  const contactMethods = t('contacts.content', { returnObjects: true });
  return (
    <PageWrapper>
      <Header backgroundSrc={contactsImage}>
        {/* <TheMap variants={mapVariants} initial="initial" animate="show" /> */}
        <StyledLookDown src={lookDownImage} alt="look down" />
      </Header>
      <ContactsSection>
        <AnimatedTitle text={t('contacts.title')} delay={2} />

        {/* contact methods */}
        <ContactMethodsContainer>
          {contactMethods.map(({ iconClasses, title, href }, index) => (
            <ContactMethod key={index} style={{ fontSize: '40px' }}>
              <MethodTitleContainer>
                <i className={iconClasses}></i>
                <p>{title}</p>
              </MethodTitleContainer>
              {iconClasses.includes('location') && (
                <TheMap
                  variants={mapVariants}
                  initial="initial"
                  whileInView="show"
                />
              )}
            </ContactMethod>
          ))}
        </ContactMethodsContainer>
      </ContactsSection>
    </PageWrapper>
  );
}

export default Contacts;
