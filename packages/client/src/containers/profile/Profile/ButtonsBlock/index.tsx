import React, { useContext } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { ButtonWithContent as Button } from '@project/libs/components';
import { RewardsIcon } from '@project/libs/assets/images';
import { ModalContext } from 'context/modalOpen';
import styles from './styles.module.scss';

export const ButtonBlock: React.FC = () => {
  const { t } = useTranslation('main');
  const { openModal, setContentModal } = useContext(ModalContext);

  const openPromocode = () => {
    setContentModal('promocode');
    openModal();
  };

  const openCollectRewards = () => {
    setContentModal('collectRewards');
    openModal();
  };

  return (
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
};
