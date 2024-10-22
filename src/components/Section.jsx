import styled from 'styled-components';
import { navHeight, xlPadding, xsPadding } from '../style';
import { forwardRef } from 'react';

const StyledContainer = styled.section`
  padding: ${navHeight + 20}px ${xsPadding}px 20px;
  width: 100%;

  //^ for tablet version
  @media only screen and (min-width: 450px) {
  }
  //^ for computer version
  @media only screen and (min-width: 800px) {
    padding-left: ${xlPadding}px;
    padding-right: ${xlPadding}px;
  }
`;
const Section = forwardRef(function ({ children, className }, ref) {
  //write code here

  return (
    <StyledContainer ref={ref} className={className}>
      {children}
    </StyledContainer>
  );
});

export default Section;
