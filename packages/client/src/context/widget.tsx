import React, { useState } from 'react';

export const WidgetContext = React.createContext({
  widget: false,
  content: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setContentWidget: (contentWidget: string) => {},
  openWidget: () => {},
  closeWidget: () => {},
});

export const WidgetProvider: React.FC = ({ children }) => {
  const [widget, setWidget] = useState(false);
  const [content, setContent] = useState('');

  const openWidget = () => {
    setWidget(true);
  };

  const closeWidget = () => {
    setWidget(false);
  };

  const setContentWidget = (contentWidget: string) => {
    setContent(contentWidget);
  };

  return (
    <WidgetContext.Provider value={{
      widget, content, openWidget, closeWidget, setContentWidget,
    }}
    >
      {children}
    </WidgetContext.Provider>
  );
};
