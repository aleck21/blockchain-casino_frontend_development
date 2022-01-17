import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { InsertFormatedText } from 'utils/insertFormatedText';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

export const AboutBGD: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.aboutBGD__container)}>
      <div className={cx(styles.aboutBGD__top)}>
        <Text type="h3">
          {t('About BGD')}
        </Text>
      </div>
      <div className={cx(styles.aboutBGD__main)}>
        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('What is BGD')}
        </Text>
        <Text type="p">
          {t('BGD-BG-Dollar-is-a-special')}
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('How to get BGD?')}
        </Text>
        <Text type="p">
          <InsertFormatedText
            text={t('You-can-get-BGD')}
            findText="BCSwap"
            className={cx(styles.blue__text)}
          />
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('How to unlock BGD?')}
        </Text>
        <Text type="p">
          {t('The-BGD-obtained-through')}
          <br />
          <span className={cx(styles.white__text)}>
            {t('Unlock amount')}
            &nbsp;=&nbsp;
            {t('wager amount')}
            &nbsp;*&nbsp;
            {t('house edge')}
            &nbsp;* (20
            <span className={cx(styles.blue__text)}>+5</span>
            )%
          </span>
          <br />
          {t('Different-games-have')}
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('Can-BGD-be-exchanged')}
        </Text>
        <Text type="p">
          <InsertFormatedText
            text={t('Sure-The-most-exciting')}
            findText="BGSwap"
            className={cx(styles.blue__text)}
          />
        </Text>

        <Text
          type="p"
          className={cx(styles.aboutBGD__title)}
        >
          {t('What-is-special-about')}
        </Text>
        <Text type="p">
          {t('You-can-enjoy-up-to')}
          <span className={cx(styles.white__text)}>
            &nbsp;10%&nbsp;
          </span>
          <InsertFormatedText
            text={t('You-can-enjoy-up-to2')}
            findText="Vault Pro"
            className={cx(styles.blue__text)}
          />
        </Text>
      </div>
    </div>
  );
};
