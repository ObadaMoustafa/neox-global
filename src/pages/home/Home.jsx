import Header from './components/Header';
import Loader from '../../components/Loader';
import { useContext, useEffect } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import Container from '../../components/Container';
import styled from 'styled-components';

const SectionContainer = styled(Container)`
  width: 100%;
  height: 550px;
`;
function Home() {
  //write code here
  const { setIsLoading } = useContext(LoadingContext);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      <Loader />
      <div>
        <Header />
        <SectionContainer></SectionContainer>
      </div>
    </>
  );
}

export default Home;
