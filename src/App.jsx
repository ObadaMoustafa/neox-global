import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import Footer from './components/Footer';
import WindowContextProvider from './contexts/WindowContext';

function App() {
  return (
    <>
      <WindowContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </WindowContextProvider>
    </>
  );
}

export default App;
