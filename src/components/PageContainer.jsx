import styled from 'styled-components';
import { xlPadding, xsPadding } from '../style';

const Container = styled.div`
  padding: ${xlPadding}px;
`;
function PageContainer({ children }) {
  //write code here

  return <Container>{children}</Container>;
}

export default PageContainer;
