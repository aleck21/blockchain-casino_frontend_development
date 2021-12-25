import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { Button } from 'components/Button';
import { ModalContext } from 'context/modalOpen';

export const StatisticsTitle: React.FC = () => {
  const { t } = useTranslation('main');
  const { setContentModal, openModal } = useContext(ModalContext);

  const showStatisstics = () => {
    setContentModal('statistics');
    openModal();
  }

  return(
    <div className={cx(styles.title__container)}>
      <Text type='h3' className={cx(styles.title__text)}>
        {t('Statistics')}
      </Text>
      <Button
        text={t('Transactions')}
        onClick={showStatisstics}
        className={cx(styles.transaction__button)}
      />
    </div>
  );
}
