import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import { Button } from '@project/libs/components';
import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import { useUser } from 'hooks';
import { useTranslation } from 'i18n';
import styles from './styles.module.scss';

export const Header: FC = () => {
  const { t } = useTranslation('main');
  const { isUser } = useUser();

  const onSignInClick = useCallback(() => {}, []);

  return (
    <div className={cx(styles.container)}>
      { !isUser && (
      <>
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
      </>
      )}
    </div>
  );
};
