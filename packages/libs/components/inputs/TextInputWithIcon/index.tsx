import React, { useState } from 'react';
import { IconCopy, CloseIcon, HidPasswordIcon } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';

type InputProps = {
  name: string;
  defaultValue?: string;
  typeIcon?: 'clear' | 'password' | 'copy';
  password?: boolean;
  label?: string;
  className?: string;
  classNameLabel?: string;
  disabled?: boolean;
};

export const TextInputWithIcon: React.FC<InputProps> = ({
  name,
  defaultValue = '',
  typeIcon = 'clear',
  password = false,
  label,
  className,
  classNameLabel,
  disabled = false,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isPassword, setIsPassword] = useState(password);

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const onIconClick = () => {
    switch (typeIcon) {
      case 'clear':
        setValue('');
        break;
      case 'copy':
        navigator.clipboard.writeText(value).then(() => {}).catch(() => {});
        break;
      case 'password':
        setIsPassword(!isPassword);
        break;
      default:
        break;
    }
  };

  const icons: Record<string, string> = {
    copy: IconCopy,
    password: HidPasswordIcon,
    clear: CloseIcon,
  };

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
          defaultValue={defaultValue}
          onChange={onChangeInput}
          value={value}
          type={isPassword ? 'password' : 'text'}
          className={cx(styles.inputWI__field, className)}
          disabled={disabled}
        />
        <div
          className={cx(styles.inputWI__icon)}
          onClick={onIconClick}
          onKeyPress={undefined}
          role="button"
          tabIndex={0}
        >
          <img
            src={icons[typeIcon]}
            alt={typeIcon}
          />
        </div>
      </div>
    </div>
  );
};
