import React, { useContext } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text, Button } from '@project/libs/components';
import { ModalContext } from 'context/modalOpen';
import { ModalName } from 'constants/modals';
import { Table } from './Table';
import { dataTable } from './contentDemo';
import styles from './styles.module.scss';

export const Statistics: React.FC = () => {
  const { t } = useTranslation('main');
  const { setContentModal, openModal } = useContext(ModalContext);

  const showStatisstics = () => {
    setContentModal(ModalName.statistics);
    openModal();
  };

  const showTransactions = () => {
    setContentModal(ModalName.transactions);
    openModal();
  };

  return (
    <>
      <div className={cx(styles.statistics__title__container)}>
        <div
          onClick={showStatisstics}
          className={cx(styles.statistics__title__text__box)}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          <Text
            type="h3"
            className={cx(styles.statistics__title__text)}
          >
            {t('Statistics')}
          </Text>
        </div>
        <Button
          onClick={showTransactions}
          className={cx(styles.statistics__transaction__button)}
        >
          {t('Transactions')}
        </Button>
      </div>
      <Table
        data={dataTable}
      />
    </>
  );
};
