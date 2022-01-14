import React, { FC, useCallback, useContext } from 'react';
import cx from 'classnames';
import { Button } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { WidgetContext } from 'context';
import styles from './styles.module.scss';
import { Info } from '../Info';
import { Profile } from '../Profile';
import { Note } from '../Note';

export const HeaderContentUser: FC = () => {
  const { t } = useTranslation('main');
  const { setContentWidget, openWidget } = useContext(WidgetContext);

  const onWalletClick = useCallback(() => {
    setContentWidget('wallet');
    openWidget();
  }, [openWidget, setContentWidget]);

  return (
    <section className={cx(styles.container)}>
      <Info />
      <Button
        className={cx(styles.wallet_button)}
        onClick={onWalletClick}
      >
        {t('Wallet')}
      </Button>
      <Profile />
      <div className={cx(styles.head_user_contet__note)}>
        <Note />
      </div>
    </section>
  );
};
