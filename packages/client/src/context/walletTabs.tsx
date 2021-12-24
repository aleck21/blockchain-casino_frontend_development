import React from 'react';

export const WalletTabsContext = React.createContext({
  tabs: {
    deposit: true,
    withdraw: false,
    rakeback: false,
    exchange: false
  },
  onDeposit: () => {},
  onWithdraw: () => {},
  onRakeback: () => {},
  onExchange: () => {},
})

export const WalletTabsProvider: React.FC = ({children}) => {
  const [tabs, setTabs] = React.useState({
    deposit: true,
    withdraw: false,
    rakeback: false,
    exchange: false
  });

  const onDeposit = () => {
    setTabs({
      deposit: true,
      withdraw: false,
      rakeback: false,
      exchange: false
    })
  };

  const onWithdraw = () => {
    setTabs({
      deposit: false,
      withdraw: true,
      rakeback: false,
      exchange: false
    })
  };

  const onRakeback = () => {
    setTabs({
      deposit: false,
      withdraw: false,
      rakeback: true,
      exchange: false
    })
  };

  const onExchange = () => {
    setTabs({
      deposit: false,
      withdraw: false,
      rakeback: false,
      exchange: true
    })
  };

  return(
    <WalletTabsContext.Provider value={{
      tabs,
      onDeposit,
      onWithdraw,
      onRakeback,
      onExchange
    }}>
      {children}
    </WalletTabsContext.Provider>
  );
}