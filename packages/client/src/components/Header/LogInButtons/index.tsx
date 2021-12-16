import React, { FC, useCallback } from 'react';
import { Button } from '@project/libs/components';
import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import { useTranslation } from 'i18n';
import cx from 'classnames';
import styles from './styles.module.scss';

export const LogInButtons: FC = () => {
  const { t } = useTranslation('main');

  const onSignInClick = useCallback(() => {}, []);
  
  return(
    <section className={cx(styles.container)}>
      <Button
        onClick={onSignInClick}
        className={cx(styles.button, styles.buttonSignIn)}
      >
        {t('Sign-in')}
      </Button>
      <Button
        className={styles.button}
        theme={ButtonTheme.outline}
      >
        {t('Register')}
      </Button>
    </section>
  );
}