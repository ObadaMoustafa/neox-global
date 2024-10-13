import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  console.log(t('description'));
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <h1>{t('header')}</h1>
      <h1>{t('description')}</h1>

      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('nl')}>nl</button>
    </>
  );
}

export default App;
