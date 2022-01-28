import React, { memo, useCallback } from 'react';
import { Button, ButtonIcon, Image } from '@project/libs/components';
import { ArrowUp } from '@project/libs/assets/images';
import { CurrencyColorIcons } from 'constants/currencies';
import cx from 'classnames';
import styles from './styles.module.scss';

type InputNumberProps = {
  currency: string;
  value: string;
  onChange: (e: string) => void;
  isButtons: boolean;
};

const InputNumber = memo(({
  currency,
  value,
  onChange,
  isButtons,
}: InputNumberProps) => {
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

  const onUpClick = useCallback(() => {
    onChange(String(Number(value) + 1));
  }, [onChange, value]);

  const onDownClick = useCallback(() => {
    if (value === '0') {
      return true;
    }
    onChange(String(Number(value) - 1));
  }, [onChange, value]);

  return (
    <section className={cx(
      styles.input__container,
      !isButtons && styles.noButtons,
    )}
    >
      <Image url={CurrencyColorIcons[currency]} />
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
      />
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
    </section>
  );
});

export { InputNumber };
