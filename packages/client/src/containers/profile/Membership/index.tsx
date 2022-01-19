import React, { memo, useContext } from 'react';
import cx from 'classnames';
import { Button, Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { GoldBunny, RewardsIcon } from '@project/libs/assets/images';
import { ProgressBar } from 'components/ProgressBar';
import { ModalContext } from 'context';
import styles from './styles.module.scss';

export const Membership = memo(() => {
  const { t } = useTranslation('main');

  const progressDemo = {
    quanity: 105000,
    of: 130000,
  };

  const contentDemo = {
    bgt: 500000,
    percentage: 11,
  };

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
    <div className={cx(styles.membership__container)}>
      <Text type="h3">
        {t('Membership level progress')}
      </Text>
      <section className={cx(styles.membership__paper)}>
        <div className={cx(styles.membership__type)}>
          <Image url={GoldBunny} />
          <Text type="p">
            Gold Bunny 3
          </Text>
        </div>
        <ProgressBar
          quanity={progressDemo.quanity}
          ofValue={progressDemo.of}
        />
      </section>
      <Text
        type="p"
        className={cx(styles.text__box)}
      >
        {contentDemo.bgt.toLocaleString()}
        {' '}
        BGT and
        {contentDemo.percentage}
        % rakeback
      </Text>
      <div className={cx(styles.buttons__container)}>
        <Button
          onClick={openCollectRewards}
          className={cx(styles.left__button)}
        >
          <Image url={RewardsIcon} />
          {t('Collect rewards')}
        </Button>
        <Button
          onClick={openPromocode}
          className={cx(styles.right__button)}
        >
          {t('Activate new promocode')}
        </Button>
      </div>
    </div>
  );
});
