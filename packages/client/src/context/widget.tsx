import React, { useState } from 'react';

export const WidgetContext = React.createContext({
  widget: false,
  content: '',
  setContentWidget: (content: string) => {},
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

  const setContentWidget = (content: string) => {
    setContent(content);
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
