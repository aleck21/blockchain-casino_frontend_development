import React from 'react';
import { ModalProvider, WidgetProvider, MenuProvider } from 'context';
import { MainRouter } from '../navigation/MainRouter';

const App = () => (
  <ModalProvider>
    <WidgetProvider>
      <MenuProvider>
        <MainRouter />
      </MenuProvider>
    </WidgetProvider>
  </ModalProvider>
);

export { App };
