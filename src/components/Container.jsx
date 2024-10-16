import styled from 'styled-components';
import { xlPadding, xsPadding } from '../style';
import { forwardRef } from 'react';

const StyledContainer = styled.div`
  padding: 0 ${xsPadding}px;
  width: 100%;

  // for tablet version
  @media only screen and (min-width: 375px) {
  }
  // for computer version
  @media only screen and (min-width: 800px) {
    padding: 0 ${xlPadding}px;
  }
`;
const Container = forwardRef(function ({ children, className }, ref) {
  //write code here

  return (
    <StyledContainer ref={ref} className={className}>
      {children}
    </StyledContainer>
  );
});

export default Container;
