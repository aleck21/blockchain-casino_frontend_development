import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text, Image } from '@project/libs/components';
import { IconCopy, QRDemo } from '@project/libs/assets/images';

export const Deposit: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <section className={cx(styles.deposit__container)}>
      <div className={cx(styles.deposit__textMode)}>
        <Text type='p' className={cx(styles.deposit__title)}>
          {t('To deposit funds send them to the wallet')}
        </Text>
        <input
          type='text'
          className={cx(styles.deposit__textMode__input)}
          value={'c2m19375...0dj2c9c48n25m2u5p'}
        />
        <div className={cx(styles.deposit__textMode__input__icon)}>
          <Image url={IconCopy} />
        </div>
      </div>
      <div className={cx(styles.deposit__QR_Mode)}>
        <Text type='p' className={cx(styles.deposit__title, styles.center)}>
          {t('Or use the QR code')}
        </Text>
        <Image url={QRDemo} />
      </div>
    </section>
  );
}