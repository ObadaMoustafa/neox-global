import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WindowContextProvider from './contexts/WindowContext';
import HoldingWork from './components/HoldingWork';
import { useState } from 'react';

function App() {
  const [isClosed, setIsClosed] = useState(true);
  const handleClose = () => {
    setIsClosed(!isClosed);
  };
  return (
    <>
      <WindowContextProvider>
        {isClosed ? (
          <HoldingWork fn={handleClose} />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />
          </>
        )}
      </WindowContextProvider>
    </>
  );
}

export default App;
