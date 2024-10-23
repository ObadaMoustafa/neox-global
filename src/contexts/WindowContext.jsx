import { createContext, useEffect, useState } from 'react';
export const WindowContext = createContext();
const WindowContextProvider = ({ children }) => {
  const getDevice = (num) => {
    if (num <= 450) return 'mobile';
    if (num <= 800) return 'tablet';
    else return 'pc';
  };
  const [device, setDevise] = useState(getDevice);
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setDevise(getDevice(innerWidth));
    });

    return () => removeEventListener('resize', window);
  }, []);

  const sharedValues = { device };

  return (
    <WindowContext.Provider value={sharedValues}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
