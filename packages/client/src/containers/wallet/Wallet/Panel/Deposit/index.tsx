import React, { useState } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text, Image } from '@project/libs/components';
import { IconCopy, QRDemo } from '@project/libs/assets/images';
import styles from './styles.module.scss';

const depositDemo = 'c2m19375...0dj2c9c48n25m2u5p';

export const Deposit: React.FC = () => {
  const { t } = useTranslation('main');

  const [copy, setCopy] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(depositDemo)
      .then(() => {
        setCopy(true);
        setTimeout(() => { setCopy(false); }, 1000);
      })
      .catch(() => {
        setCopy(false);
      });
  };

  return (
    <section className={cx(styles.deposit__container)}>
      <div className={cx(styles.deposit__textMode)}>
        <Text
          type="p"
          className={cx(styles.deposit__title)}
        >
          {t('To deposit funds send them to the wallet')}
        </Text>
        <div
          className={cx(styles.deposit__textMode__input)}
        >
          {depositDemo}
        </div>
        <div
          className={cx(styles.deposit__textMode__input__icon)}
          onClick={onCopy}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          <img
            src={IconCopy}
            alt="copy"
          />
          <div className={cx(
            styles.deposit__textMode__input__message,
            copy ? styles.message__show : styles.message__hidden,
          )}
          >
            {t('copied')}
          </div>
        </div>
      </div>
      <div className={cx(styles.deposit__QR_Mode)}>
        <Text
          type="p"
          className={cx(styles.deposit__title, styles.center)}
        >
          {t('Or use the QR code')}
        </Text>
        <Image url={QRDemo} />
      </div>
    </section>
  );
};
