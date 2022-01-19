import React, { memo, useContext } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Button, Image, Text } from '@project/libs/components';
import { ActiveBonusBkgDesktop } from '@project/libs/assets/images';
import { ModalContext } from 'context';
import styles from './styles.module.scss';

export const Active = memo(() => {
  const { setContentModal, openModal } = useContext(ModalContext);
  const { t } = useTranslation('main');

  const onBonusClick = () => {
    setContentModal('activatingNewBonus');
    openModal();
  };

  return (
    <div className={cx(styles.active__container)}>
      <div className={cx(styles.active__container__otherBkg)}>
        <Image
          url={ActiveBonusBkgDesktop}
          className={cx(styles.active__container__otherBkg__image)}
        />
      </div>
      <Button
        className={cx(styles.active__container__content)}
        onClick={onBonusClick}
      >
        <Text
          type="h6"
          className={cx(styles.active__title)}
        >
          {t('Active Bonus')}
        </Text>
        <Text
          type="p"
          className={cx(styles.active__text)}
        >
          {t('+100% BGD bonus for the next 100-200 USD deposit')}
        </Text>
      </Button>
    </div>
  );
});
