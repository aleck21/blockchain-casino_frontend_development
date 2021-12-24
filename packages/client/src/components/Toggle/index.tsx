import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Toggle: React.FC = () => {
  const [state, setState] = useState(false)
  
  const onToggle = () => {
    setState(!state)
  }

  return(
    <div className={cx(styles.toggle__container)}
      onClick={onToggle}
    >
      <div className={cx(styles.toggle__green__layer,
        state ? styles.on : styles.off  
      )}>
        <div className={cx(styles.toggle__element,
          state ? styles.element_on : styles.element_off
        )} />
      </div>
    </div>
  );
}
