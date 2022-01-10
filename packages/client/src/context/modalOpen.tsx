/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { createContext, useState } from 'react';

export const ModalContext = createContext({
  modal: false,
  content: '',
  openModal: () => {},
  closeModal: () => {},
  setContentModal: (content: string) => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('');

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const setContentModal = (content: string) => {
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{
      modal, content, openModal, closeModal, setContentModal,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
