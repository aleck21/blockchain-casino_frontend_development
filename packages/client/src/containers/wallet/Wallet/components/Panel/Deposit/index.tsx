import React, { useState } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import { Text, Image } from '@project/libs/components';
import { IconCopy, QRDemo } from '@project/libs/assets/images';
import styles from './styles.module.scss';

const depositDemo = 'c2m19375...0dj2c9c48n25m2u5p';

export const Deposit: React.FC = () => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState(depositDemo);
  const [copy, setCopy] = useState(false);

  const changeValue = (e: any) => {
    setValue(e.target.value);
  };

  const onCopy = () => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setCopy(true);
        setTimeout(() => { setCopy(false); }, 1000);
      })
      .catch((error) => {
        setCopy(false);
        console.log(`Error copying to clipboard: ${error}`);
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
        <input
          type="text"
          className={cx(styles.deposit__textMode__input)}
          onChange={changeValue}
          value={value}
        />
        <div
          className={cx(styles.deposit__textMode__input__icon)}
          onClick={onCopy}
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
