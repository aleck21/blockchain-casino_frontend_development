import React, { useState } from 'react';
import { Text } from '@project/libs/components';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';

type InputProps = {
  label?: string;
  className?: string;
  classNameButton?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  defaultValue?: string;
  name?: string;
  reset?: boolean;
  resetContent?: string | Element | React.ReactNode;
  placeholder?: string;
}

export const TextInput: React.FC<InputProps> = ({
  label,
  className,
  classNameButton,
  classNameContainer,
  classNameLabel,
  defaultValue,
  name,
  reset = false,
  resetContent,
  placeholder
}) => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState(defaultValue);

  const onChangeInput = (e: any) => {
    console.log(e.target);
    setValue(e.target.value);
  } 

  return(
    <div className={cx(styles.input__container)}>
      {label &&
        <Text
          type='p'
          className={cx(styles.input__text__label, classNameLabel)}
        >
          {label}
        </Text>
      }
      <div className={cx(classNameContainer)}>
        <input
          type='text'
          value={value}
          className={cx(styles.input__body, className)}
          onChange={onChangeInput}
          name={name}
          placeholder={placeholder}
        />
        {reset && 
          <button
            type='reset'
            className={cx(classNameButton)}
            onClick={() => setValue('')}
          >
            {resetContent || t('Reset')}
          </button>
        }
      </div>
    </div>
  );
}