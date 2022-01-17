import React from 'react';
import cx from 'classnames';
import { Image, Text, ButtonWithContent as Button } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { CurrencyColorIcons } from 'constants/currencies';
import { contentDemo } from './contentDemo';
import styles from './styles.module.scss';

export const ContentRakeback: React.FC = () => {
  const { t } = useTranslation('main');
  const l = contentDemo.length;

  return (
    <div className={cx(styles.rakeback__container)}>
      <div className={cx(styles.rakeback__table_header)}>
        <div className={cx(styles.empty)}>{' '}</div>
        <div className={cx(styles.table_header__text)}>
          <Text type="p">
            {t('My Rakeback')}
          </Text>
        </div>
        <div className={cx(styles.table_header__text)}>
          <Text type="p">
            {t('Max Rakeback')}
          </Text>
        </div>
        <div className={cx(styles.empty)}>{' '}</div>
      </div>
      {contentDemo.map((fields, key) => (
        <div
          className={cx(styles.rakeback__table_row,
            (key === l - 1)
              ? styles.last_table_row
              : styles.middle_table_row)}
          key={fields.id}
        >
          <div className={cx(styles.coin__container)}>
            <div className={cx(styles.coinLogo)}>
              <Image url={CurrencyColorIcons[fields.type]} />
            </div>
            <div className={cx(styles.coinName)}>
              <Text type="p">{fields.type}</Text>
            </div>
          </div>
          <div className={cx(styles.rakeback)}>
            <Text type="p">{fields.myRakeback}</Text>
          </div>
          <div className={cx(styles.rakeback)}>
            <Text type="p">{fields.maxRakeback}</Text>
          </div>
          <div className={cx(styles.button)}>
            <Button
              className={cx(styles.button_return)}
              type="button"
              disabled={false}
              onClick={() => {}}
              text={t('Return')}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
