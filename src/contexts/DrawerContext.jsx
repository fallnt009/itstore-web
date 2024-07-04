import {useState, createContext} from 'react';

const DrawerContext = createContext();

export default function DrawerContextProvider({children}) {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const openDrawerWithContent = (content) => {
    setDrawerContent(content);
    setIsOpen(true);
    console.log('open');
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };
  return (
    <DrawerContext.Provider
      value={{openDrawerWithContent, closeDrawer, isOpen, drawerContent}}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export {DrawerContext};
