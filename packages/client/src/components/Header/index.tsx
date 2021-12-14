import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import { Button } from '@project/libs/components';
import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import styles from './styles.module.scss';

export const Header: FC = () => {
  console.log('heh');

  const onSignInClick = useCallback(() => {}, []);

  return (
    <div className={cx(styles.container)}>
      <Button
        onClick={onSignInClick}
        className={styles.button}
      >
        Sign In
      </Button>
      <Button
        className={styles.button}
        theme={ButtonTheme.outline}
      >
        Register
      </Button>
    </div>
  );
};
