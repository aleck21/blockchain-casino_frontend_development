import React, { useCallback, useContext, useState } from 'react';
import cx from 'classnames';
import {
  Button,
  Image,
  Text,
} from '@project/libs/components';
import { ArrowToDown, QuestionIcon } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { CurrencyColorIcons } from 'constants/currencies';
import { ModalContext } from 'context';
import { ModalName } from 'constants/modals';
import styles from './styles.module.scss';
import { balance } from './contentDemo';

const contentDemo = {
  currencyCount: 0.0000001,
  currency: 'BTC',
};

export const Info: React.FC = () => {
  const [isShowBalance, setIsShowBalance] = useState(false);
  const { openModal, setContentModal } = useContext(ModalContext);
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

  const onBalaceClick = useCallback(() => {
    setIsShowBalance(!isShowBalance);
  }, [isShowBalance]);

  const onQuestionClick = useCallback(() => {
    setIsShowBalance(false);
    setContentModal(ModalName.aboutBgd);
    openModal();
  }, [openModal, setContentModal]);

  return (
    <section className={cx(styles.container)}>
      <Button
        className={cx(styles.header_info__currency)}
        onClick={onBalaceClick}
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
      </Button>
      <div className={cx(styles.header_info__count)}>
        {currencyFormat(contentDemo.currencyCount)}
      </div>
      {isShowBalance && (
        <section className={cx(styles.balance__paper)}>
          <Text type="h4">
            {t('Show the balance in this currency')}
          </Text>
          {balance.map((row) => (
            <div className={cx(styles.balance__row)}>
              <div className={cx(styles.balance__row__currency)}>
                <Image url={CurrencyColorIcons[row.currency]} />
                &nbsp;
                {row.currency}
                &nbsp;
                {row.question
                  ? (
                    <Button
                      className={cx(styles.question__button)}
                      onClick={onQuestionClick}
                    >
                      <Image
                        url={QuestionIcon}
                        className={cx(styles.question)}
                      />
                    </Button>
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
        </section>
      )}
    </section>
  );
};
