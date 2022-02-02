import React, {
  memo,
  useCallback,
  useState,
} from 'react';
import {
  Button,
  Image,
  SelectWithContent,
  Text,
  TextInput,
} from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Trans } from 'react-i18next';
import { CurrencyColorIcons, CurrenciesName } from 'constants/currencies';
import { PopUp } from 'components';
import { deposit } from '../../contentDemo';
import { DialogModal } from '../../DialogModal';
import styles from './styles.module.scss';

const DepositTab = memo(() => {
  const { t } = useTranslation('main');
  const [amount, setAmount] = useState(deposit.amountStart);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [, setDialogValue] = useState(false);

  const onChangeAmount = useCallback((text: string) => {
    setAmount(text);
  }, []);

  const onConfirmClick = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const onDialogClose = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const onNoClick = () => {
    setDialogValue(false);
    setIsDialogOpen(false);
  };

  const onYesClick = () => {
    setDialogValue(true);
    setIsDialogOpen(false);
  };

  return (
    <>
      <section className={styles.deposit__container}>
        <article className={styles.inBank__box}>
          <div className={styles.inBank__left}>
            <Text type="p">
              {deposit.totalInBank.quantity.toLocaleString(
                'ru-RU', { useGrouping: true },
              )}
              {' '}
              <span>
                {deposit.totalInBank.currency}
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
              {deposit.yourPart.quantity.toLocaleString(
                'en-US', { useGrouping: true },
              )}
              {' '}
              <span>
                {deposit.yourPart.currency}
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
              list={deposit.currencies.map((item) => ({
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
              classItem={styles.deposit_select__item}
              classWrapContainer={styles.deposit_select__wrap_container}
            />
          </div>
        </article>
        <div className={styles.choose__container}>
          <article className={styles.choose__select__container}>
            <Text
              type="p"
              className={styles.title}
            >
              {t('Choose the leverage')}
            </Text>
            <SelectWithContent
              list={deposit.leverage}
              classContainer={styles.choose__select}
              classItemsBlock={styles.choose__itemsBlock}
              classWrapContainer={styles.choose__wrap__container}
              classItem={styles.choose__select__item}
            />
          </article>
          <article className={styles.button__box}>
            <Text
              type="p"
              className={styles.title}
            >
              <Trans
                i18nKey={t('You-will-control')}
              >
                You will control
                {' '}
                <span>2%</span>
                {' '}
                of bank
              </Trans>
            </Text>
            <Button onClick={onConfirmClick}>
              {t('Deposit Funds')}
            </Button>
          </article>
        </div>
      </section>
      {isDialogOpen && (
        <PopUp
          onClose={onDialogClose}
        >
          <DialogModal
            setNoValue={onNoClick}
            setYesValue={onYesClick}
          />
        </PopUp>
      )}
    </>
  );
});

export { DepositTab };
