import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonIcon, Image } from '@project/libs/components';
import { ArrowUp, ReloadIconBW } from '@project/libs/assets/images';
import { CurrencyColorIcons } from 'constants/currencies';
import cx from 'classnames';
import styles from './styles.module.scss';

type InputNumberProps = {
  currency?: string;
  value: string;
  onChange: (e: string) => void;
  isButtons: boolean;
  isReload?: boolean;
  onReload?: () => void;
};

const InputNumber = memo(({
  currency,
  value,
  onChange,
  isButtons,
  isReload,
  onReload,
}: InputNumberProps) => {
  const [reload, setReload] = useState(false);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onButtonOneClick = useCallback(() => {
    const result = String(Number(value) / 2);
    onChange(result);
  }, [onChange, value]);

  const onButtonTwoClick = useCallback(() => {
    const result = String(Number(value) * 2);
    onChange(result);
  }, [onChange, value]);

  const onButton10Click = useCallback(() => {
    onChange('10');
  }, [onChange]);

  const onButton100Click = useCallback(() => {
    onChange('100');
  }, [onChange]);

  const onUpClick = useCallback(() => {
    onChange(String(Number(value) + 1));
  }, [onChange, value]);

  const onDownClick = useCallback(() => {
    if (value === '0') {
      return true;
    }
    onChange(String(Number(value) - 1));
  }, [onChange, value]);

  const onReloadClick = useCallback(() => {
    setReload(!reload);
    if (onReload) {
      onReload();
    }
  }, [reload, setReload, onReload]);

  return (
    <section className={cx(
      styles.input__container,
      { [styles.noButtons]: !isButtons },
      { [styles.reload__container]: isReload },
    )}
    >
      {currency && <Image url={CurrencyColorIcons[currency]} />}
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
      />
      {isReload && (
        <>
          <Button
            onClick={onButton10Click}
            className={styles.number__button}
          >
            10
          </Button>
          <Button
            onClick={onButton100Click}
            className={styles.number__button}
          >
            100
          </Button>
        </>
      )}
      {isButtons && (
        <>
          <Button
            onClick={onButtonOneClick}
            className={styles.number__button}
          >
            /2
          </Button>
          <Button
            onClick={onButtonTwoClick}
            className={styles.number__button}
          >
            2x
          </Button>
        </>
      )}
      {isReload
        ? (
          <ButtonIcon
            imageURL={ReloadIconBW}
            onClick={onReloadClick}
            classNameImage={reload ? styles.reload : styles.noReload}
          />
        )
        : (
          <div className={styles.input__arrowButtons}>
            <ButtonIcon
              imageURL={ArrowUp}
              onClick={onUpClick}
            />
            <ButtonIcon
              imageURL={ArrowUp}
              className={styles.arrowDown}
              onClick={onDownClick}
            />
          </div>
        )}
    </section>
  );
});

export { InputNumber };
