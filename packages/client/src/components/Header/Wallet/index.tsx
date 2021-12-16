import React, { FC, useCallback } from 'react';
import { Button } from '@project/libs/components';
// import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import { useTranslation } from 'i18n';
import cx from 'classnames';
import styles from './styles.module.scss';

export const Wallet: FC = () => {
  const { t } = useTranslation('main');
  
  const onWalletClick = useCallback(() => {}, []);

  return (
    <div className={cx(styles.container)}>
      <Button
        className={cx(styles.button)}
        onClick={onWalletClick}
      >
        {t('Wallet')}
      </Button>
    </div>
  );
}