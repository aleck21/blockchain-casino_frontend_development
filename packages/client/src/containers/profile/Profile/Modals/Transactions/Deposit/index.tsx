import React from 'react';
import 'antd/dist/antd.css';
import cx from 'classnames';
import { Image, WrapSelect } from '@project/libs/components';
import { CurrencyColorIcons } from 'constants/currencies';
import { ClockIcon, ComfirmedIcon, CrossRedIcon } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { select, table } from './contentDemo';
import styles from './styles.module.scss';

export const Deposit: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className="deposit__container">
      <WrapSelect list={select} />
      <section className="table__container">
        <div
          className={cx(styles.table__row__head)}
        >
          <div
            className={cx(styles.table__item__head)}
          >
            {t('Time')}
          </div>
          <div
            className={cx(styles.table__item__head)}
          >
            {t('Amount')}
          </div>
          <div
            className={cx(styles.table__item__head)}
          >
            {t('State')}
          </div>
          <div
            className={cx(styles.table__item__head)}
          >
            {t('Transactions')}
          </div>
        </div>
        {table.map((row, key) => (
          <div
            className={cx(styles.table__row)}
            key={row.id}
          >
            <div
              className={cx(styles.table__item)}
            >
              {row.time}
            </div>
            <div
              className={cx(styles.table__item, styles.item_with_icon)}
            >
              <Image url={CurrencyColorIcons[row.amount.type]} />
              {' '}
              {`${row.amount.quanity} ${row.amount.type}`}
            </div>
            <div
              className={cx(styles.table__item)}
            >
              {row.state === 'Pending' && (
              <div className="item_with_icon text__gray">
                <Image url={ClockIcon} />
                {' '}
                Pending
              </div>
              )}
              {row.state === 'Rejected' && (
              <div className="item_with_icon text__red">
                <Image url={CrossRedIcon} />
                {' '}
                Rejected
              </div>
              )}
              {row.state === 'Comfirmed' && (
              <div className="item_with_icon text__green">
                <Image url={ComfirmedIcon} />
                {' '}
                Comfirmed
              </div>
              )}
            </div>
            <div
              className={cx(styles.table__item)}
            >
              <div className={key === 0 ? '' : 'table__text__blue'}>
                {row.transaction}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
