import React, { memo, useState } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { InputWithModal } from 'containers/classicDice/ClassicDice/InputWithModal';
import { InputNumber } from 'containers/classicDice/ClassicDice/InputNumber';
import { autoTabDatas } from 'containers/classicDice/ClassicDice/contentDemo';
import styles from './styles.module.scss';

const AutoTab = memo(() => {
  const { t } = useTranslation('main');
  const [winValue, setWinValue] = useState(autoTabDatas.onWin);
  const [loseValue, setLoseValue] = useState(autoTabDatas.onLose);
  const [betSize, setBetSize] = useState(autoTabDatas.betSize.quantity);
  const [stopOnWin, setStopOnWin] = useState(autoTabDatas.stopOnWin.quantity);

  const onWinChange = (e: string) => {
    if (Number(e) > 100) {
      setWinValue('100');
      return;
    }
    setWinValue(e);
  };

  const onWinReset = () => {
    setWinValue('');
  };

  const onLoseChange = (e: string) => {
    if (Number(e) > 100) {
      setLoseValue('100');
      return;
    }
    setLoseValue(e);
  };

  const onLoseReset = () => {
    setLoseValue('');
  };

  const onBetSizeChange = (e: string) => {
    setBetSize(e);
  };

  const onStopOnWinChange = (e: string) => {
    setStopOnWin(e);
  };

  return (
    <section className={styles.autoTab__container}>
      <article className={styles.autoTab__titleWithData}>
        <Text type="h4">
          {t('Bet size')}
        </Text>
        <Text type="p">
          {autoTabDatas.betSize.size}
          {' '}
          USD
        </Text>
      </article>
      <InputNumber
        currency={autoTabDatas.betSize.currency}
        value={betSize}
        onChange={onBetSizeChange}
        isButtons
      />
      <article className={styles.autoTab__titleWithData}>
        <Text type="h4">
          {t('Stop on Win')}
        </Text>
        <Text type="p">
          {autoTabDatas.stopOnWin.size}
          {' '}
          USD
        </Text>
      </article>
      <InputNumber
        currency={autoTabDatas.stopOnWin.currency}
        value={stopOnWin}
        onChange={onStopOnWinChange}
        isButtons={false}
      />
      <InputWithModal
        title={t('On win')}
        value={winValue}
        onChange={onWinChange}
        onReset={onWinReset}
      />
      <InputWithModal
        title={t('On lose')}
        value={loseValue}
        onChange={onLoseChange}
        onReset={onLoseReset}
      />
    </section>
  );
});

export { AutoTab };
