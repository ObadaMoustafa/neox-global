import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WindowContextProvider from './contexts/WindowContext';
import NotFound from './pages/not-found/NotFound';
import { useState } from 'react';
import HoldingWork from './components/HoldingWork';

function App() {
  const [holdWork, setHoldWork] = useState(true);
  const handleClick = () => setHoldWork(false);
  return (
    <>
      {holdWork ? (
        <HoldingWork fn={handleClick} />
      ) : (
        <WindowContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </WindowContextProvider>
      )}
    </>
  );
}

export default App;
