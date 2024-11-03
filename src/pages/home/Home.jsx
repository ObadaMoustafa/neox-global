import Header from './components/Header';
import CompaniesSection from './components/CompaniesSection';
import TrustedPartner from './components/TrustedPartner';
import PageWrapper from '../../components/PageWrapper';

function Home() {
  //write code here

  return (
    <PageWrapper>
      <Header />
      <CompaniesSection />
      <TrustedPartner />
    </PageWrapper>
  );
}

export default Home;
