import { FC, useCallback, useContext } from 'react';
import { Button } from '@project/libs/components';
// import { ButtonTheme } from '@project/libs/components/inputs/Button/types';
import { useTranslation } from 'i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { WidgetContext } from 'context/widget';

export const Wallet: FC = () => {
  const { t } = useTranslation('main');
  const { setContentWidget, openWidget } =  useContext(WidgetContext);
  
  const onWalletClick = useCallback(() => {
    setContentWidget('wallet');
    openWidget();
  }, []);

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