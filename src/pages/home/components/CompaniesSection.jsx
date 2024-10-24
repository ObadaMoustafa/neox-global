import styled from 'styled-components';
import Section from '../../../components/Section';
import { titleColor } from '../../../style';
import { useTranslation } from 'react-i18next';
import Company from './Company';
import AnimatedTitle from '../../../components/AnimatedTitle';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { WindowContext } from '../../../contexts/WindowContext';

const ActivitiesSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 30px 0;

  h2 {
    width: 100%;
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-size: xx-large;
    font-weight: 100;
    color: ${titleColor};
  }
`;

const CompaniesContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px 30px;

  //^ Tablet version
  @media only screen and (min-width: 450px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  //^ Computer version
  @media only screen and (min-width: 800px) {
    font-size: 25pt;
  }
`;

const MotionCompany = styled(motion.create(Company))``;

//* animation *\\
const companyVariantsMobile = {
  init: { scaleX: 0, y: -100, x: 0 },
  show: { scaleX: 1, y: 0, x: 0 },
};

const companyVariantsPc = {
  0: {
    init: { x: -200, opacity: 0 },
    show: { x: 0, opacity: 1 },
  },
  1: {
    init: { y: 200, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  2: {
    init: { x: 200, opacity: 0 },
    show: { x: 0, opacity: 1 },
  },
};

function CompaniesSection() {
  const { t } = useTranslation();

  // get all companies updated automatically with chosen language

  const companies = t('homepage.companies.content', { returnObjects: true });
  const { isMobile } = useContext(WindowContext);
  return (
    <ActivitiesSection>
      <AnimatedTitle text={t('homepage.companies.title')} />
      <CompaniesContainer>
        {/* whe made two versions here to prevent the animation conflict when sizing screen */}
        {isMobile
          ? companies.map(({ image, text }, i) => (
              <MotionCompany
                key={i}
                image={image}
                text={text}
                variants={companyVariantsMobile}
                initial="init"
                whileInView="show"
                transition={{ duration: 0.5 }}
              />
            ))
          : companies.map(({ image, text }, i) => (
              <MotionCompany
                key={i + companies.length}
                image={image}
                text={text}
                variants={companyVariantsPc[i]}
                initial="init"
                whileInView="show"
                transition={{ duration: 0.5 }}
              />
            ))}
      </CompaniesContainer>
    </ActivitiesSection>
  );
}

export default CompaniesSection;
