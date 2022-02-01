import React, { memo, useCallback, useState } from 'react';
import {
  Button,
  Image,
  SelectWithContent,
  Text,
  TextInput,
} from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { CurrencyColorIcons, CurrenciesName } from 'constants/currencies';
import { withdraw } from '../../contentDemo';
import styles from './styles.module.scss';

const WithdrawTab = memo(() => {
  const { t } = useTranslation('main');
  const [amount, setAmount] = useState(withdraw.amountStart);

  const onChangeAmount = useCallback((text: string) => {
    setAmount(text);
  }, []);

  return (
    <section className={styles.withdraw__container}>
      <article className={styles.inBank__box}>
        <div className={styles.inBank__left}>
          <Text type="p">
            {withdraw.totalInBank.quantity.toLocaleString(
              'ru-RU', { useGrouping: true },
            )}
            {' '}
            <span>
              {withdraw.totalInBank.currency}
            </span>
          </Text>
          <Text
            type="p"
            className={styles.title}
          >
            {t('Total in bank')}
          </Text>
        </div>
        <div className={styles.inBank__right}>
          <Text type="p">
            {withdraw.yourPart.quantity.toLocaleString(
              'en-US', { useGrouping: true },
            )}
            {' '}
            <span>
              {withdraw.yourPart.currency}
            </span>
          </Text>
          <Text
            type="p"
            className={styles.title}
          >
            {t('Yout part')}
          </Text>
        </div>
      </article>
      <article className={styles.select__container}>
        <Text
          type="p"
          className={styles.title}
        >
          {t('Enter amount and choose currency that you want to deposit')}
        </Text>
        <div className={styles.select__box}>
          <TextInput
            value={amount}
            onChangeValue={onChangeAmount}
          />
          <SelectWithContent
            list={withdraw.currencies.map((item) => ({
              id: item.id,
              data: (
                <>
                  <Image url={CurrencyColorIcons[item.data]} />
                  <Text
                    type="p"
                    className={styles.select__text}
                  >
                    {CurrenciesName[item.data]}
                    &ensp;
                    <span>{item.data}</span>
                  </Text>
                </>
              ),
            }))}
            classItem={styles.withdraw_select__item}
            classWrapContainer={styles.withdraw_select__wrap_container}
          />
        </div>
      </article>
      <article className={styles.button__box}>
        <Text
          type="p"
          className={styles.title}
        >
          {t('You will control 0% of bank')}
        </Text>
        <Button onClick={undefined}>
          {t('Deposit Funds')}
        </Button>
      </article>
    </section>
  );
});

export { WithdrawTab };
