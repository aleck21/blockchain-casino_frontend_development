import React, { createContext, FC, useState } from 'react';

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
  openMenu: () => {},
  closeMenu: () => {},
});

export const MenuProvider : FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
