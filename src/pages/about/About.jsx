import styled from 'styled-components';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import { motion } from 'framer-motion';
import AnimatedTitle from '../../components/AnimatedTitle';
import { useTranslation } from 'react-i18next';
import Image from '../../components/Image';
import { contentFontSize, imgBorderRadius, textColor } from '../../style';
import { useContext } from 'react';
import { WindowContext } from '../../contexts/WindowContext';

// header of the page
const Parallax = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/Business_with_ESA_pillars_bkcu4m.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
`;

const LookDownImage = styled(Image)`
  width: 45%;
  position: absolute;
  bottom: -15px;
  left: 10%;
  z-index: 3;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    width: 25%;
    bottom: -50px;
    left: 5%;
  }
`;

// about us section
const StyledSection = styled(Section)`
  min-height: 100vh;
`;

const AboutUsText = styled(motion.p)`
  font-size: ${contentFontSize.mobile};
  color: ${textColor};
  text-align: center;
  margin: 15px 0;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    font-size: ${contentFontSize.pc};
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    text-align: left;
    line-height: 45px;
  }
`;

const AboutUsImageMobile = styled(motion.create(Image))`
  width: 100%;
  height: fit-content;
`;

const AboutUsContentContainerPc = styled(motion.div)`
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 150px;
  margin: 150px 0;
`;

const AboutUsImagePc = styled(motion.create(Image))`
  min-width: 40%;
  max-height: 100%;
  border-radius: ${imgBorderRadius}px;
  flex-grow: 2;
`;

//? Animations' Variants
const parallaxVariants = {
  init: { width: 0, transformOrigin: 'center' },
  show: { width: '100%', transition: { duration: 0.8, delay: 1.4 } },
};

const aboutUsMobileVariants = {
  init: { x: 0, y: 100, opacity: 0 },
  show: { x: 0, y: 0, opacity: 1 },
};

const aboutUsPCVariants = {
  init: { scaleX: 1.5, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 1 } },
};
function About() {
  function scrollDown() {
    window.scrollTo(0, innerHeight);
  }
  const { t } = useTranslation();
  const aboutUsContent = t('about.content', { returnObjects: true });
  const { isMobile } = useContext(WindowContext);
  const aboutUsImages = [
    'https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/teamwork_j17aeg.webp',
    'https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/personalize-needs_vsc19p.jpg',
    'https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/Hero_loyda-liikekumppani_hpghhe.jpg',
  ];
  return (
    <>
      <Loader />
      <Parallax variants={parallaxVariants} initial="init" animate="show">
        <LookDownImage
          src="https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/look-down_srmwsu.png"
          fn={scrollDown}
        />
        <div className="feather-bottom"></div>
      </Parallax>
      <StyledSection>
        <AnimatedTitle text={t('about.title.0')} />
        <AnimatedTitle text={t('about.title.1')} />
        {isMobile ? (
          <>
            {aboutUsContent.map(({ text }, i) => (
              <AboutUsText
                variants={aboutUsMobileVariants}
                initial="init"
                whileInView="show"
                transition={{ duration: 1 }}
                key={i}
              >
                {text}
              </AboutUsText>
            ))}
            <AboutUsImageMobile
              variants={aboutUsMobileVariants}
              initial="init"
              whileInView="show"
              transition={{ duration: 1 }}
              src="https://res.cloudinary.com/elsharbatly/image/upload/v1730110321/NEOX/Images/workers_b524zs.png"
            />
          </>
        ) : (
          <>
            {aboutUsContent.map(({ text, image }, i) => (
              <AboutUsContentContainerPc
                key={i}
                style={i % 2 !== 0 ? { flexDirection: 'row-reverse' } : {}}
                variants={aboutUsPCVariants}
                initial="init"
                whileInView="show"
              >
                <AboutUsText>{text}</AboutUsText>
                <AboutUsImagePc src={image} />
              </AboutUsContentContainerPc>
            ))}
          </>
        )}
      </StyledSection>
    </>
  );
}

export default About;
