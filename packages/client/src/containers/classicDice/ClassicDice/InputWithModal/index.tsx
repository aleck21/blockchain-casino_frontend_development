import React, { memo, useCallback, useState } from 'react';
import { Text, ButtonIcon } from '@project/libs/components';
import { GraphicIconColor, CloseIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { ModalGraphic } from '../ModalGraphic';

type InputWithModalProps = {
  wonDatas: number[][];
  wageredDatas: number[][];
  title: string;
  onChange: (e: string) => void;
  value: string | number;
  onReset: () => void;
};

const InputWithModal = memo(({
  wonDatas,
  wageredDatas,
  title,
  onChange,
  onReset,
  value,
}: InputWithModalProps) => {
  const [isShowGraphic, setIsShowGraphic] = useState(false);

  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  const onShowGraphicClick = useCallback(() => {
    setIsShowGraphic(true);
  }, []);

  const onCloseGraphicClick = useCallback(() => {
    setIsShowGraphic(false);
  }, []);

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
          datasWon={wonDatas}
          datasWagered={wageredDatas}
        />
      )}
    </>
  );
});

export { InputWithModal };
