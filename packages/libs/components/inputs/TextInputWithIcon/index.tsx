import React, { useState } from 'react';
import { IconCopy, CloseIcon, HidPasswordIcon } from '@project/libs/assets/images';
import './styles.scss';

type InputProps = {
  name: string;
  defaultValue?: string;
  typeIcon?: 'clear' | 'password' | 'copy';
  typeInput?: string;
  label?: string;
  className?: string;
  classNameLabel?: string;
};

export const TextInputWithIcon: React.FC<InputProps> = ({
  name,
  defaultValue = '',
  typeIcon = 'clear',
  typeInput = 'text',
  label,
  className,
  classNameLabel,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [type, setType] = useState(typeInput);

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  const onCopy = () => {
    navigator.clipboard.writeText(value).then(() => {}).catch(() => {});
  };

  const onShowPassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const onFunctions: Record<string, () => void> = {
    clear: onClear,
    copy: onCopy,
    password: onShowPassword,
  };

  const icons: Record<string, string> = {
    copy: IconCopy,
    password: HidPasswordIcon,
    clear: CloseIcon,
  };

  return (
    <div className="inputWI__container">
      {label && (
        <p className={`inputWI__label ${classNameLabel}`}>
          {label}
        </p>
      )}
      <div className="inputWI__box">
        <input
          name={name}
          defaultValue={defaultValue}
          onChange={onChangeInput}
          value={value}
          type={type}
          className={`inputWI__field ${className}`}
        />
        <div
          className="inputWI__icon"
          onClick={onFunctions[typeIcon]}
          onKeyPress={() => {}}
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
