import React, { memo, useState } from 'react';
import { Text, ButtonIcon } from '@project/libs/components';
import { GraphicIconColor, CloseIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { ModalGraphic } from '../ModalGraphic';

type InputWithModalProps = {
  // graphicDatas: string[];
  title: string;
  onChange: (e: string) => void;
  value: string | number;
  onReset: () => void;
};

const InputWithModal = memo(({
  // graphicDatas,
  title,
  onChange,
  onReset,
  value,
}: InputWithModalProps) => {
  const [isShowGraphic, setIsShowGraphic] = useState(false);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onShowGraphicClick = () => {
    setIsShowGraphic(true);
  };

  const onCloseGraphicClick = () => {
    setIsShowGraphic(false);
  };

  return (
    <>
      <div className={styles.input__container}>
        <Text type="p">
          {title}
        </Text>
        <input
          value={value}
          onChange={onChangeValue}
          type="text"
        />
        <Text
          type="p"
          className={styles.input__percentage}
        >
          %
        </Text>
        <ButtonIcon
          imageURL={GraphicIconColor}
          onClick={onShowGraphicClick}
        />
        <ButtonIcon
          imageURL={CloseIcon}
          onClick={onReset}
          className={styles.cross}
        />
      </div>
      {isShowGraphic && (
        <ModalGraphic
          won={100}
          wagered={110}
          rackeback={10}
          funds={1000}
          currency="btc"
          onClose={onCloseGraphicClick}
        />
      )}
    </>
  );
});

export { InputWithModal };
