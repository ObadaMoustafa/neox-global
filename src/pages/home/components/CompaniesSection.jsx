import styled from 'styled-components';
import Section from '../../../components/Section';
import { navHeight, titleColor } from '../../../style';
import { useTranslation } from 'react-i18next';
import Company from './Company';
import AnimatedTitle from '../../../components/AnimatedTitle';
import { motion } from 'framer-motion';

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

const companyVariants = {
  init: { scale: 0, y: -100 },
  show: { scale: 1, y: 0 },
};
function CompaniesSection() {
  const { t } = useTranslation();

  // get all companies updated automatically with chosen language

  const companies = t('companies', { returnObjects: true });

  return (
    <ActivitiesSection>
      <AnimatedTitle text="Discover our companies" />
      <CompaniesContainer
        variants={companyVariants}
        initial="init"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.25 }}
      >
        {companies.map(({ image, text }, i) => (
          <MotionCompany
            key={i}
            image={image}
            text={text}
            variants={companyVariants}
          />
        ))}
      </CompaniesContainer>
    </ActivitiesSection>
  );
}

export default CompaniesSection;
