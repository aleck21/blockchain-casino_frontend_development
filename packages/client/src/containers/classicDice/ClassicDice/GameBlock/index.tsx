import React, { memo, useState } from 'react';
import cx from 'classnames';
import { payoutDefault, win, winChanceMinMax } from 'containers/classicDice/ClassicDice/contentDemo';
import {
  Button,
  ButtonIcon,
  Image,
  Text,
  TextInput,
} from '@project/libs/components';
import { DiceDemo, ExchangeIcon } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { LastBankroll } from '../LastBankrolls';
import styles from './styles.module.scss';
import { WrapSlider } from '../WrapSlider';

const GameBlock = memo(() => {
  const { t } = useTranslation('main');
  const [roll, setRoll] = useState(50);
  const [winChance, setWinChance] = useState(50);
  const [payout, setPayout] = useState(payoutDefault);

  const onChangeRoll = (value: number) => {
    setRoll(value);
  };

  const onMinWinClick = () => {
    setWinChance(winChanceMinMax.min);
  };

  const onMaxWinClick = () => {
    setWinChance(winChanceMinMax.max);
  };

  const onWinStepPlus = () => {
    if (winChance + 5 > winChanceMinMax.max) {
      setWinChance(winChanceMinMax.max);
      return;
    }
    setWinChance(winChance + 5);
  };

  const onWinStepMinus = () => {
    if (winChance - 5 < winChanceMinMax.min) {
      setWinChance(winChanceMinMax.min);
      return;
    }
    setWinChance(winChance - 5);
  };

  const onChangePayout = (text: any) => {
    setPayout(text);
  };

  return (
    <div className={cx(styles.gameBlock__container)}>
      <LastBankroll />
      <div className={cx(styles.gameCanvas__box)}>
        <div className={cx(styles.gameCanvas__win)}>
          {win}
        </div>
        <div className={cx(styles.gameCanvas__dice)}>
          <Image url={DiceDemo} />
        </div>
        <WrapSlider
          position={roll}
          onChange={onChangeRoll}
        />
        <div className={cx(styles.separator)} />
      </div>
      <div className={cx(styles.gameBlock__payout__box)}>
        <TextInput
          label={t('Payout')}
          isWithClear
          value={payout}
          onChangeValue={onChangePayout}
          classNameInput={cx(styles.gameBlock__input, styles.gameBlock__payout)}
        />
        <div className={cx(styles.gameBclock__rollOver__box)}>
          <div className={cx(styles.gameBlock__rollField)}>
            <Text type="p">
              {t('Roll over')}
            </Text>
            <div className={cx(styles.gameBlock__rollOver)}>
              {roll}
            </div>
          </div>
          <ButtonIcon
            imageURL={ExchangeIcon}
            className={cx(styles.gameBlock__rollButton)}
            classNameImage={cx(styles.rollButton__image)}
          />
        </div>
      </div>
      <Text type="p">
        {t('Win chance')}
      </Text>
      <div className={styles.gameBlock__winChance}>
        <Text type="p">
          {winChance.toLocaleString(
            'en-US', { minimumFractionDigits: 2 },
          )}
          %
        </Text>
        <Button
          className={cx(styles.winChance__button)}
          onClick={onMinWinClick}
        >
          Min
        </Button>
        <Button
          className={cx(styles.winChance__button)}
          onClick={onWinStepMinus}
        >
          -5
        </Button>
        <Button
          className={cx(styles.winChance__button)}
          onClick={onWinStepPlus}
        >
          +5
        </Button>
        <Button
          className={cx(styles.winChance__button)}
          onClick={onMaxWinClick}
        >
          Max
        </Button>
      </div>
    </div>
  );
});

export { GameBlock };
