import React, { ReactElement, useContext } from 'react';
// import cx from 'classnames';
import './styles.scss';
import { Image } from '@project/libs/components';
import { CloseIcon } from '@project/libs/assets/images';
import { WidgetContext } from 'context/widget';
import { Sidebar } from 'components';
import { Profile, Wallet } from 'containers';
import { ModalContext } from 'context/modalOpen';

type MapContent = {
  [index: string]: ReactElement;
};

export const Widget: React.FC = () => {
  const { closeWidget, content, widget } = useContext(WidgetContext);
  const { modal } = useContext(ModalContext);
  const contents: MapContent = {
    menu: <Sidebar />,
    wallet: <Wallet />,
    profile: <Profile />,
  };
  return (
    <div
      className={
        widget ? 'widget__container' : 'hidden__widget'
      }
      style={{ filter: modal ? 'blur(20px)' : 'blur(0px)' }}
    >
      {contents[content]}
      {/* content === 'menu' && <Sidebar />}
      {content === 'wallet' && <Wallet />}
      {content === 'profile' && <Profile />}
      {/* {content === 'notification' && <Wallet />}
      {content === 'roulette' && <Wallet />}
      {content === 'verification' && <Wallet />}
      {content === 'home' && <Wallet />} */}
      <div
        className="widget__close__button"
        onClick={() => closeWidget()}
        onKeyPress={() => {}}
        tabIndex={0}
        role="button"
      >
        <Image url={CloseIcon} />
      </div>
    </div>
  );
};
