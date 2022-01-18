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
  name: string;
  isPassword?: boolean;
  label?: string;
  className?: string;
  classNameLabel?: string;
  disabled?: boolean;
  isWithClear?: boolean;
  onChangeValue?: (text: string) => void;
};

export const TextInputWithIcon: React.FC<InputProps> = ({
  value,
  defaultValue,
  name,
  isPassword,
  label,
  className,
  classNameLabel,
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
    <div className={cx(styles.inputWI__container)}>
      {label && (
        <p className={cx(styles.inputWI__label, classNameLabel)}>
          {label}
        </p>
      )}
      <div className={cx(styles.inputWI__box)}>
        <input
          name={name}
          value={value}
          type={inputType}
          className={cx(styles.inputWI__field, className)}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
        {isWithClear && (
        <ButtonIcon
          imageURL={CloseIcon}
          className={cx(styles.inputWI__icon)}
          onClick={onClearClick}
        />
        )}
        {isPassword && (
        <ButtonIcon
          imageURL={isPasswordVisible ? EyeCrossedIcon : EyeIcon}
          className={cx(styles.inputWI__icon)}
          onClick={onPasswordToggleClick}
        />
        )}
      </div>
    </div>
  );
};
