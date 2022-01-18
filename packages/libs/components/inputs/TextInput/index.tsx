import React, { useCallback, useMemo, useState } from 'react';
import {
  CloseIcon,
  EyeCrossedIcon,
  EyeIcon,
} from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';
import { ButtonIcon } from '../ButtonIcon';

type InputProps = {
  value: string;
  defaultValue?: string;
  name?: string;
  isPassword?: boolean;
  label?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classNameContainer?: string;
  disabled?: boolean;
  isWithClear?: boolean;
  onChangeValue?: (text: string) => void;
};

export const TextInput: React.FC<InputProps> = ({
  value,
  defaultValue,
  name,
  isPassword,
  label,
  classNameInput,
  classNameLabel,
  classNameContainer,
  disabled = false,
  isWithClear,
  onChangeValue,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeValue !== undefined) {
        onChangeValue(e.target.value);
      }
    }, [onChangeValue],
  );

  const inputType = useMemo(() => (
    isPassword && !isPasswordVisible ? 'password' : 'text'
  ), [isPassword, isPasswordVisible]);

  const onClearClick = useCallback(() => {
    if (onChangeValue !== undefined) {
      onChangeValue('');
    }
  }, [onChangeValue]);

  const onPasswordToggleClick = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <div className={cx(styles.input__container, classNameContainer)}>
      {label && (
        <p className={cx(styles.input__label, classNameLabel)}>
          {label}
        </p>
      )}
      <div className={cx(styles.input__box)}>
        <input
          name={name}
          value={value}
          type={inputType}
          className={cx(styles.input__field, classNameInput)}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
        {isWithClear && (
        <ButtonIcon
          imageURL={CloseIcon}
          className={cx(styles.input__icon)}
          onClick={onClearClick}
        />
        )}
        {isPassword && (
        <ButtonIcon
          imageURL={isPasswordVisible ? EyeCrossedIcon : EyeIcon}
          className={cx(styles.input__icon)}
          onClick={onPasswordToggleClick}
        />
        )}
      </div>
    </div>
  );
};
