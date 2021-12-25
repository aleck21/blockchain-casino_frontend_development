import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button } from 'components/Button';
import { RewardsIcon } from '@project/libs/assets/images';
import { ModalContext } from 'context/modalOpen';

export const ButtonBlock: React.FC = () => {
  const { t } = useTranslation('main');
  const { content, openModal, setContentModal } = useContext(ModalContext);

  const openPromocode = () => {
    setContentModal('promocode');
    openModal();
  }

  const openCollectRewards = () => {
    setContentModal('collectRewards');
    openModal();
  }

  return(
    <div className={cx(styles.buttons__container)}>
      <Button
        text={t('Collect rewards')}
        icon={RewardsIcon}
        onClick={openCollectRewards}
        className={cx(styles.left__button)}
      />
      <Button
        text={t('Activate new promocode')}
        onClick={openPromocode}
        className={cx(styles.right__button)}
      />
    </div>
  );
}