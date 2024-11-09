import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingContext } from '../contexts/LoadingContext';
import NeoxLogoRight from '../assets/logo-part-right.png';
import NeoxLogoLeft from '../assets/logo-part-left.png';
import NeoxLogoBottom from '../assets/logo-part-bottom-dark.png';

const LoaderContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #00000000;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const LoaderSlice = styled(motion.div)`
  background-color: #9d9e9eff;
  width: 100%;
  flex-grow: 1;
`;

const VisualContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;

  .logo-container {
    width: 1308px;
    height: 1310px;
    aspect-ratio: 1/1;
    scale: 0.15;
    position: relative;

    @media only screen and (min-width: 800px) {
      scale: 0.25;
    }
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  img.right {
    position: absolute;
    top: 0;
    right: 0;
  }
  img.left {
    position: absolute;
    top: 0;
    left: 0;
  }
  img.bottom {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

function Loader() {
  //write code here
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    // scroll to top before every page and start the fake loading
    window.scrollTo(0, 0);
    setIsLoading(true);

    // make it false to start the transaction and play the page
    const stopLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(stopLoading);
  }, []);

  const transition = {
    transition: { duration: 2, type: 'tween' },
  };
  const LoaderSlices = [];
  for (let i = 0; i <= 7; i++) {
    const isEven = i % 2 === 0;
    LoaderSlices.push(
      <LoaderSlice
        key={i}
        exit={{ y: isEven ? '105vh' : '-105vh', ...transition }}
      />
    );
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <LoaderContainer>
          <VisualContainer>
            <div className="logo-container">
              <motion.img
                src={NeoxLogoRight}
                alt="company logo"
                className="right"
                exit={{ x: '200vw', scale: 3, opacity: 0, ...transition }}
              />
              <motion.img
                src={NeoxLogoLeft}
                alt="company logo"
                className="left"
                exit={{ x: '-200vw', scale: 3, opacity: 0, ...transition }}
              />
              <motion.img
                src={NeoxLogoBottom}
                alt="company logo"
                className="bottom"
                exit={{ y: '200vh', scale: 3, opacity: 0, ...transition }}
              />
            </div>
          </VisualContainer>
          {LoaderSlices}
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
}

export default Loader;
