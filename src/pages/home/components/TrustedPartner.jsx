import styled from 'styled-components';
import Section from '../../../components/Section';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../../../components/AnimatedTitle';
import Image from '../../../components/Image';
import { motion } from 'framer-motion';
import { contentFontSize, textColor } from '../../../style';
import { useContext } from 'react';
import { WindowContext } from '../../../contexts/WindowContext';

const ComponentSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'title'
    'p'
    'img';
  row-gap: 25px;
  overflow: hidden;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'title img'
      'p     img';
  }
`;

const StyledTitle = styled.div`
  grid-area: title;
  margin: 0 auto;
  display: flex;
  align-items: center;

  //^Computer version
  @media only screen and (min-width: 800px) {
    margin: 0;
  }
`;

const ParagraphsContainer = styled.div`
  grid-area: p;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: ${contentFontSize.mobile};
  justify-content: center;
  align-items: center;
  text-align: center;

  //^Computer version
  @media only screen and (min-width: 800px) {
    font-size: ${contentFontSize.pc};
    text-align: left;
    align-items: flex-start;
  }
`;

const HorizontalImage = styled(motion.create(Image))`
  grid-area: img;
`;

const VerticalImage = styled(motion.create(Image))`
  grid-area: img;
  height: 100%;
  transform-origin: bottom;
`;

// * animation * \\
const paragraphVariants = {
  // using y:0 in pc and x:0 in mobile to prevent animation conflict when sizing the screen
  pc: {
    init: {
      opacity: 0,
      x: -200,
      y: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  },
  mobile: {
    init: {
      opacity: 0,
      y: 150,
      x: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  },
};

const verticalImageVariants = {
  init: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0 },
};

const horizontalImageVariants = {
  init: { opacity: 0, y: 150 },
  show: { opacity: 1, y: 0 },
};

function TrustedPartner() {
  //write code here
  const { t } = useTranslation();
  const paragraphs = t('homepage.objective.content', { returnObjects: true });
  const title = t('homepage.objective.title');
  const { isMobile } = useContext(WindowContext);
  return (
    <ComponentSection>
      {/* title */}
      <StyledTitle>
        <AnimatedTitle text={title} />
      </StyledTitle>

      {/* Text */}
      <ParagraphsContainer>
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={
              isMobile ? paragraphVariants.mobile : paragraphVariants.pc
            }
            initial="init"
            whileInView="show"
            transition={{ duration: 0.9 }}
          >
            {text}
          </motion.p>
        ))}
      </ParagraphsContainer>

      {/* Picture */}
      {isMobile ? (
        <HorizontalImage
          src="https://res.cloudinary.com/elsharbatly/image/upload/v1729700499/NEOX/Images/business-stuff_cqovg6.png"
          alt="business photo"
          variants={horizontalImageVariants}
          initial="init"
          whileInView="show"
          transition={{ duration: 0.9 }}
        />
      ) : (
        <VerticalImage
          src="https://res.cloudinary.com/elsharbatly/image/upload/v1729700498/NEOX/Images/working-serious_iaflpi.png"
          alt="business photo"
          variants={verticalImageVariants}
          initial="init"
          whileInView="show"
          transition={{ duration: 0.9 }}
        />
      )}
    </ComponentSection>
  );
}

export default TrustedPartner;
