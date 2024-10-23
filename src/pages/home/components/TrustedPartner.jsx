import styled from 'styled-components';
import Section from '../../../components/Section';
import { useTranslation } from 'react-i18next';
import AnimatedTitle from '../../../components/AnimatedTitle';
import Image from '../../../components/Image';
import businessStuffImage from '../../../images/business-stuff.png';
import workingSeriousImage from '../../../images/working-serious.png';
import { motion } from 'framer-motion';
import { contentFontSize, textColor } from '../../../style';
const ComponentSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'title'
    'p'
    'img';
  row-gap: 25px;

  //^ Computer version
  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'title img'
      'p     img';
  }
`;

const StyledTitle = styled(AnimatedTitle)`
  grid-area: title;
  margin: 0 auto;

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
  }
`;

const HorizontalImage = styled(motion.create(Image))`
  grid-area: img;

  //^Computer version
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const VerticalImage = styled(motion.create(Image))`
  grid-area: img;
  display: none;
  height: 100%;
  transform-origin: bottom;

  //^Computer version
  @media only screen and (min-width: 800px) {
    display: block;
  }
`;

// * animation * \\
const paragraphVariants = {
  init: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

const verticalImageVariants = {
  init: { opacity: 0, x: 200 },
  show: { opacity: 1, x: 0 },
};
const horizontalImageVariants = {
  init: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

function TrustedPartner() {
  //write code here
  const { t } = useTranslation();
  const paragraphs = t('objective.content', { returnObjects: true });
  const title = t('objective.title');
  return (
    <ComponentSection>
      {/* title */}
      <StyledTitle text={title} />

      {/* Text */}
      <ParagraphsContainer>
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            variants={paragraphVariants}
            initial="init"
            whileInView="show"
            transition={{ duration: 0.9 }}
          >
            {text}
          </motion.p>
        ))}
      </ParagraphsContainer>

      {/* Picture */}
      <HorizontalImage
        src={businessStuffImage}
        alt="business photo"
        variants={horizontalImageVariants}
        initial="init"
        whileInView="show"
        transition={{ duration: 0.9 }}
      />
      <VerticalImage
        src={workingSeriousImage}
        alt="business photo"
        variants={verticalImageVariants}
        initial="init"
        whileInView="show"
        transition={{ duration: 0.9 }}
      />
    </ComponentSection>
  );
}

export default TrustedPartner;
