import React, { useState } from 'react';
import { Image, Text } from '@project/libs/components';
import cx from 'classnames';
import { HidPasswordIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

type InputProps = {
  label?: string;
  className?: string;
  classNameButton?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  defaultValue?: string;
  name?: string;
};

export const PasswordInput: React.FC<InputProps> = ({
  label,
  className,
  classNameButton,
  classNameContainer,
  classNameLabel,
  defaultValue,
  name,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [show, setShow] = useState(false);

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={cx(styles.input__container)}>
      {label && (
        <Text
          type="p"
          className={cx(styles.input__text__label, classNameLabel)}
        >
          {label}
        </Text>
      )}
      <div className={cx(styles.input__block, classNameContainer)}>
        <input
          type={show ? 'text' : 'password'}
          value={value}
          className={cx(styles.input__body, className)}
          onChange={onChangeInput}
          name={name}
        />
        <button
          type="reset"
          className={cx(styles.input__showButton, classNameButton)}
          onClick={() => setShow(!show)}
        >
          <Image url={HidPasswordIcon} />
        </button>
      </div>
    </div>
  );
};
