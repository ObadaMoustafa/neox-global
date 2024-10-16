import styled from 'styled-components';
import Container from './Container';
import FooterColumn from './footer/FooterColumn';
import FooterContent from './footer/FooterContent';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.create(Container))`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 10pt;
  font-weight: 100;
  overflow: hidden;
  gap: 30px;

  // shadow
  -webkit-box-shadow: 0px -10px 30px -11px rgba(244, 179, 53, 1);
  -moz-box-shadow: 0px -10px 30px -11px rgba(244, 179, 53, 1);
  box-shadow: 0px -10px 30px -11px rgba(244, 179, 53, 1);

  > div {
    padding: 50px 0;

    // flex for content in the column
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  // for tablet version
  @media only screen and (min-width: 375px) {
    flex-direction: row;
    flex-wrap: wrap;
    > div {
    }

    > div:last-of-type {
      flex-grow: 1;
    }
  }
  // for computer version
  @media only screen and (min-width: 800px) {
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    flex-wrap: nowrap;
    gap: 20px;

    > div {
      padding: 70px 0;
      flex-grow: 1;
    }
  }
`;

const containerVariants = {
  init: { scale: 0.5, opacity: 0, y: 50 },
  view: { scale: 1, opacity: 1, y: 0 },
};
function Footer() {
  //write code here

  return (
    <FooterContainer
      variants={containerVariants}
      initial="init"
      whileInView="view"
      viewport={{ once: true }}
      transition={{ duration: 0.3, staggerChildren: 0.3 }}
    >
      <div>
        <FooterColumn title="Contacts">
          <FooterContent>
            <div>Voorbeeldweg 123 1100GG Stadsnaam</div>
            <p>06-voorbeeld info@voorbeeld.nl</p>
          </FooterContent>
        </FooterColumn>
      </div>
      <div>
        <FooterColumn title="Social Media">
          <FooterContent>
            <div>Voorbeeldweg 123 1100GG Stadsnaam</div>
            <p>06-voorbeeld info@voorbeeld.nl</p>
          </FooterContent>
        </FooterColumn>
      </div>
      <div>
        <FooterColumn title="About us">
          <FooterContent>
            <div>Voorbeeldweg 123 1100GG Stadsnaam</div>
            <p>06-voorbeeld info@voorbeeld.nl</p>
          </FooterContent>
        </FooterColumn>
      </div>
    </FooterContainer>
  );
}

export default Footer;
