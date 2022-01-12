import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

type ToggleProps = {
  name: string;
  value: string;
  disabled?: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({
  name,
  value,
  disabled,
}) => {
  const [state, setState] = useState(false);

  const onToggle = () => {
    setState(!state);
  };

  return (
    <div
      className={cx(styles.toggle__container)}
      onClick={disabled ? () => {} : onToggle}
      onKeyPress={() => {}}
      tabIndex={0}
      role="checkbox"
      aria-checked={state}
      aria-labelledby={name}
    >
      <div className={cx(styles.toggle__green__layer,
        state ? styles.on : styles.off)}
      >
        <div className={cx(styles.toggle__element,
          state ? styles.element_on : styles.element_off)}
        />
      </div>
      <input
        type="hidden"
        value={state ? value : ''}
        name={name}
      />
    </div>
  );
};
