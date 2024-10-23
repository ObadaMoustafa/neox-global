import Header from './components/Header';
import Loader from '../../components/Loader';
import GoTop from '../../components/GoTop';
import CompaniesSection from './components/CompaniesSection';
import TrustedPartner from './components/TrustedPartner';

function Home() {
  //write code here

  return (
    <>
      <Loader />
      <Header />
      <CompaniesSection />
      <TrustedPartner />
      <GoTop />
    </>
  );
}

export default Home;
