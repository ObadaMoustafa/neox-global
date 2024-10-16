import { createContext, useEffect, useState } from 'react';
export const WindowContext = createContext();
const WindowContextProvider = ({ children }) => {
  const getDevice = () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth <= 375) return 'mobile';
    if (windowInnerWidth <= 768) return 'tablet';
    else return 'pc';
  };
  const [device, setDevise] = useState(getDevice);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setDevise(getDevice());
    });

    return () => removeEventListener('resize', window);
  }, [device]);

  const sharedValues = { device };

  return (
    <WindowContext.Provider value={sharedValues}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
