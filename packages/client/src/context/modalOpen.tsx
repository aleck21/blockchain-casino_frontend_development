/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { createContext, useState } from 'react';

export const ModalContext = createContext({
  isModalOpen: false,
  content: '',
  openModal: () => {},
  closeModal: () => {},
  setContentModal: (content: string) => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setContentModal = (content: string) => {
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{
      isModalOpen,
      content,
      openModal,
      closeModal,
      setContentModal,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
