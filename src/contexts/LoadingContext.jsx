import {useState, createContext} from 'react';

export const LoadingContext = createContext();

export default function LoadingContextProvider({children}) {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <LoadingContext.Provider value={{loading, startLoading, stopLoading}}>
      {children}
    </LoadingContext.Provider>
  );
}
