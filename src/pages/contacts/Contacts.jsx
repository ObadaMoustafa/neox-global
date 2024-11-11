import styled from 'styled-components';
import Section from '../../components/Section';
import Map from './components/Map';
import { motion } from 'framer-motion';
import LookDownImage from '../../components/LookDownImage';
import PageWrapper from '../../components/PageWrapper';
import contactsImage from '../../images/contacts.png';
import { btnColor, contentFontSize, navHeight, titleColor } from '../../style';
import Parallax from '../../components/Parallax';
import AnimatedTitle from '../../components/AnimatedTitle';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const lookDownImage =
  'https://res.cloudinary.com/elsharbatly/image/upload/v1731131811/NEOX/Images/lookDown_xz1uoo.png';

// Header
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

const StyledLookDown = styled(LookDownImage)`
  bottom: -40px;
  right: 5%;
  //^ Tablet version
  @media only screen and (min-width: 450px) {
    bottom: -55px;
    left: 25%;
    right: false;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    bottom: -100px;
    right: 5%;
  }
`;

// Contacts section
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
  width: 100%;
  margin-top: 35px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 100px;
    margin-top: 100px;
    > :first-child {
      width: 100%;
    }
  }
`;

// contact methods
const ContactMethod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    align-items: flex-start;
  }
`;

const LinkedTitle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: ${btnColor};
  font-size: ${contentFontSize.mobile};

  h2 {
    font-size: inherit;
    color: ${btnColor};
    font-weight: 400;
    text-align: center;
  }

  &:hover > * {
    color: ${titleColor};
  }

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    flex-direction: row;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${contentFontSize.pc};
  }
`;

const TheMap = styled(motion.create(Map))`
  height: 350px;
  width: 100vw;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    height: 500px;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    height: 600px;
    width: 100%;
    border-radius: 50px;
  }
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
        <StyledLookDown src={lookDownImage} alt="look down" />
      </Header>
      <ContactsSection>
        <AnimatedTitle text={t('contacts.title')} delay={2} />

        {/* contact methods */}
        <ContactMethodsContainer>
          {contactMethods.map(({ iconClasses, title, href }, index) => {
            const isMap = iconClasses.includes('location');
            const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              href
            )}`;

            return (
              <ContactMethod key={index} style={{ fontSize: '40px' }}>
                <LinkedTitle to={isMap ? mapsLink : href} rel="noreferrer">
                  <i className={iconClasses}></i>
                  <h2>{title}</h2>
                </LinkedTitle>
                {isMap && <TheMap />}
              </ContactMethod>
            );
          })}
        </ContactMethodsContainer>
      </ContactsSection>
    </PageWrapper>
  );
}

export default Contacts;
