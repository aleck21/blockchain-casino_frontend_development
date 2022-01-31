import React, { memo, useState, useCallback } from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
} from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { InputNumber } from 'containers/classicDice/ClassicDice/InputNumber';
import { CurrencyColorIcons } from 'constants/currencies';
import { manualTabDatas } from 'containers/classicDice/ClassicDice/contentDemo';
import styles from './styles.module.scss';

const ManualTab = memo(() => {
  const [betSize, setBetSize] = useState(manualTabDatas.betSize.quantity);
  const [winAmount, setWinAmount] = useState(manualTabDatas.winAmount.quantity);

  const { t } = useTranslation('main');

  const onBetSizeChange = useCallback((e: string) => {
    setBetSize(e);
  }, []);

  const onWinAmountChange = useCallback((value: string) => {
    setWinAmount(value);
  }, []);
  return (
    <section className={styles.manualTab__container}>
      <div className={styles.manualTab__contentBox}>
        <article className={styles.manualTab__titleWithData}>
          <Text type="h4">
            {t('Bet size')}
          </Text>
          <Text type="p">
            {manualTabDatas.betSize.size}
            {' '}
            USD
          </Text>
        </article>
        <InputNumber
          currency={manualTabDatas.betSize.currency}
          value={betSize}
          onChange={onBetSizeChange}
          isButtons
        />
        <Text type="h4">
          {t('Win amount')}
        </Text>
        <article className={styles.manualTab__inputBlock}>
          <Image url={CurrencyColorIcons[manualTabDatas.winAmount.currency]} />
          <TextInput
            onChangeValue={onWinAmountChange}
            value={winAmount}
            classNameContainer={styles.manualTab__input__container}
            classNameInput={styles.manualTab__input}
            isTextOnly
          />
        </article>
        <div />
      </div>
      <Button
        className={styles.manualTab__button}
      >
        {t('Roll')}
      </Button>
    </section>
  );
});

export { ManualTab };
