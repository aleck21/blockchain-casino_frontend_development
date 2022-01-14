import React, { useState } from 'react';
import cx from 'classnames';
import { Image, Paper, Text } from '@project/libs/components';
import { ArrowToDown, QuestionIcon } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { CurrencyImages } from 'constants/currencies';
import styles from './styles.module.scss';
import { balance } from './contentDemo';

const contentDemo = {
  currencyCount: 0.0000001,
  currency: 'BTC',
};

export const Info: React.FC = () => {
  const [isShowBalance, setIsShowBalance] = useState(false);
  const { t } = useTranslation('main');

  const currencyFormat = (currency: number) => {
    const currencyString = currency.toFixed(7);
    const [whole, fraction] = currencyString.split('.');
    return (
      <p className={cx(styles.text)}>
        {whole}
        .
        <span className={cx(styles.text_pale)}>
          {fraction}
        </span>
      </p>
    );
  };

  const onBalaceClick = () => {
    setIsShowBalance(!isShowBalance);
  };

  return (
    <section className={cx(styles.container)}>
      <div
        className={cx(styles.header_info__currency)}
        onClick={onBalaceClick}
        onKeyPress={undefined}
        tabIndex={0}
        role="button"
      >
        <Text
          type="p"
          className={cx(styles.text)}
        >
          {contentDemo.currency}
        </Text>
        <Image
          url={ArrowToDown}
          className={cx(styles.header_info__curency__arrow)}
        />
      </div>
      <div className={cx(styles.header_info__count)}>
        {currencyFormat(contentDemo.currencyCount)}
      </div>
      {isShowBalance
        ? (
          <Paper
            className={cx(styles.balance__paper)}
          >
            <Text type="h4">
              {t('Show the balance in this currency')}
            </Text>
            {balance.map((row) => (
              <div className={cx(styles.balance__row)}>
                <div className={cx(styles.balance__row__currency)}>
                  <Image url={CurrencyImages[row.currency]} />
                  &nbsp;
                  {row.currency}
                  &nbsp;
                  {row.question
                    ? (
                      <Image
                        url={QuestionIcon}
                        className={cx(styles.question)}
                      />
                    )
                    : ' '}
                </div>
                <div className={cx(styles.balance__row__quantity)}>
                  {row.quantity}
                </div>
                <div className={cx(styles.balance__row__usd)}>
                  {row.convertToUSD}
                  <span> USD</span>
                </div>
              </div>
            ))}
          </Paper>
        )
        : null}
    </section>
  );
};
