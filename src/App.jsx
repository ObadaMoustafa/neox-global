import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WindowContextProvider from './contexts/WindowContext';
import Section from './components/Section';

function App() {
  return (
    <>
      <WindowContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/*"
            element={
              <Section>
                <h1> 404 page not found</h1>
              </Section>
            }
          />
        </Routes>
        <Footer />
      </WindowContextProvider>
    </>
  );
}

export default App;
