import React from 'react';
import { ModalProvider, WidgetProvider } from 'context';
import { MainRouter } from '../navigation/MainRouter';

const App = () => (
  <ModalProvider>
    <WidgetProvider>
      <MainRouter />
    </WidgetProvider>
  </ModalProvider>
);

export { App };
