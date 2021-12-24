import React from 'react';

export const NavigationContext = React.createContext({
  menuItem: {
    home: true,
    wallet: false,
    profile: false,
    notification: false,
    roulette: false,
    verification: false
  },
  onHome: () => {},
  onWallet: () => {},
  onProfile: () => {},
  onNotification: () => {},
  onRoulette: () => {},
  onVerification: () => {}
});


export const NavigationProvider: React.FC = ({
  children
}) => {
  const [menuItem, setMenuItem] = React.useState({
    home: true,
    wallet: false,
    profile: false,
    notification: false,
    roulette: false,
    verification: false
  });

  const onHome = () => {
    setMenuItem({
      home: true,
      wallet: false,
      profile: false,
      notification: false,
      roulette: false,
      verification: false
    });
  }

  const onWallet = () => {
    setMenuItem({
      home: false,
      wallet: true,
      profile: false,
      notification: false,
      roulette: false,
      verification: false
    });
  }

  const onProfile = () => {
    setMenuItem({
      home: false,
      wallet: false,
      profile: true,
      notification: false,
      roulette: false,
      verification: false
    });
  }

  const onNotification = () => {
    setMenuItem({
      home: false,
      wallet: false,
      profile: false,
      notification: true,
      roulette: false,
      verification: false
    });
  }

  const onRoulette = () => {
    setMenuItem({
      home: false,
      wallet: false,
      profile: false,
      notification: false,
      roulette: true,
      verification: false
    });
  }

  const onVerification = () => {
    setMenuItem({
      home: false,
      wallet: false,
      profile: false,
      notification: false,
      roulette: false,
      verification: true
    });
  }

  return(
    <NavigationContext.Provider value={{
      menuItem,
      onHome,
      onWallet,
      onProfile,
      onNotification,
      onRoulette,
      onVerification
    }}>
      {children}
    </NavigationContext.Provider>
  );
}
