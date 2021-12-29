import React, { createContext, useState } from 'react';

export const ModalContext = createContext({
  modal: false,
  content: '',
  openModal: () => {},
  closeModal: () => {},
  setContentModal: (content: string) => {},
})

export const ModalProvider: React.FC = ({children}) => {
  const [ modal, setModal ] = useState(false);
  const [ content, setContent ] = useState('');
  
  const openModal = () => {
    setModal(true);
    // document.body.style.overflowY = 'hidden';
    //document.documentElement.clientWidth > 460
    //  ? document.body.style.paddingRight = '15px'
    //  : null;
  };

  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = '0';
  };

  const setContentModal = (cont: string) => {
    setContent(cont);
  };

  return(
    <ModalContext.Provider value={{
      modal, content, openModal, closeModal, setContentModal
    }} >
      {children}
    </ModalContext.Provider>
  );
}