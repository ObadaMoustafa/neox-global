import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Navbar from './components/Navbar';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <h1>{t('nav.buttons.1', { returnObjects: true })}</h1>
      <h1>{t('description')}</h1>

      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('nl')}>nl</button>
    </>
  );
}

export default App;
