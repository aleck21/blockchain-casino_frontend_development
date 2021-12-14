import React, { createContext, FC, useState } from 'react';

export const MenuContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

export const NavState : FC = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu: toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
};
