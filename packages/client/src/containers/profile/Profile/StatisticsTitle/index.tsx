import React, { useContext } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text, Button } from '@project/libs/components';
import { ModalContext } from 'context/modalOpen';
import styles from './styles.module.scss';

export const StatisticsTitle: React.FC = () => {
  const { t } = useTranslation('main');
  const { setContentModal, openModal } = useContext(ModalContext);

  const showStatisstics = () => {
    setContentModal('statistics');
    openModal();
  };

  const showTransactions = () => {
    setContentModal('transactions');
    openModal();
  };

  return (
    <div className={cx(styles.title__container)}>
      <div
        onClick={showStatisstics}
        className={cx(styles.title__text__box)}
        onKeyPress={() => {}}
        tabIndex={0}
        role="button"
      >
        <Text
          type="h3"
          className={cx(styles.title__text)}
        >
          {t('Statistics')}
        </Text>
      </div>
      <Button
        onClick={showTransactions}
        className={cx(styles.transaction__button)}
      >
        {t('Transactions')}
      </Button>
    </div>
  );
};
