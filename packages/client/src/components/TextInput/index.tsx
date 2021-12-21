import React, { useState } from 'react';
import { Text } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';

type InputProps = {
  label?: string;
  className?: string;
  defaultValue?: string;
  name?: string;
}

export const TextInput: React.FC<InputProps> = ({
  label,
  className,
  defaultValue,
  name
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeInput = (e: any) => {
    console.log(e.target);
    setValue(e.target.value);
  } 

  return(
    <div className={cx(styles.input__container)}>
      {label &&
        <Text type='p' className={cx(styles.input__text__label)}>
          {label}
        </Text>
      }
      <input
        type='text'
        value={value}
        className={cx(styles.input__body, className)}
        onChange={onChangeInput}
        name={name}
      />
    </div>
  );
}