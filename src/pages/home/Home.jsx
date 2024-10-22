import Header from './components/Header';
import Loader from '../../components/Loader';
import { useContext, useEffect } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import GoTop from '../../components/GoTop';
import CompaniesSection from './components/CompaniesSection';

function Home() {
  //write code here
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <CompaniesSection />
      <GoTop />
    </>
  );
}

export default Home;
