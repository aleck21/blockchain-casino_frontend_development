import React, { memo, useCallback, useState } from 'react';
import cx from 'classnames';
import {
  edge,
  payoutDefault,
  win,
  winChanceMinMax,
} from 'containers/classicDice/ClassicDice/contentDemo';
import {
  Button,
  ButtonIcon,
  Image,
  Text,
  TextInput,
} from '@project/libs/components';
import {
  DiceDemo,
  ExchangeIcon,
  GraphicIconBW,
  FleurIconBW,
  VolumeIconBW,
  InfoIconBW,
  KeyboardIconBW,
} from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { PopUp } from 'components';
import { LastBankroll } from '../LastBankrolls';
import { WrapSlider } from '../WrapSlider';
import styles from './styles.module.scss';
import {
  SeedSettings,
  Help,
  BetDetails,
  HotKeys,
} from '../Modals';

const GameBlock = memo(() => {
  const { t } = useTranslation('main');
  const [roll, setRoll] = useState(50);
  const [winChance, setWinChance] = useState(50);
  const [payout, setPayout] = useState(payoutDefault);
  const [isPopup, setIsPopup] = useState('');

  const popups: Record<string, JSX.Element> = {
    hotkeys: <HotKeys />,
    help: <Help onBack={() => {}} />,
    seedSettings: <SeedSettings />,
    betDetails: <BetDetails />,
  };

  const onPopupOpen = useCallback((namePopup: string) => {
    setIsPopup(namePopup);
  }, []);

  const onPopupClose = useCallback(() => {
    setIsPopup('');
  }, []);

  const onChangeRoll = useCallback((value: number) => {
    setRoll(value);
  }, []);

  const onMinWinClick = useCallback(() => {
    setWinChance(winChanceMinMax.min);
  }, []);

  const onMaxWinClick = useCallback(() => {
    setWinChance(winChanceMinMax.max);
  }, []);

  const onWinStepPlus = useCallback(() => {
    setWinChance(Math.min(winChance + 5, winChanceMinMax.max));
  }, [winChance]);

  const onWinStepMinus = useCallback(() => {
    setWinChance(Math.max(winChance - 5, winChanceMinMax.min));
  }, [winChance]);

  const onChangePayout = useCallback((text: string) => {
    setPayout(text);
  }, []);

  return (
    <>
      <div className={styles.gameBlock__container}>
        <LastBankroll />
        <div className={styles.gameCanvas__box}>
          <div className={styles.gameCanvas__win}>
            {win}
          </div>
          <div className={styles.gameCanvas__dice}>
            <Image url={DiceDemo} />
          </div>
        </div>
        <WrapSlider
          position={roll}
          onChange={onChangeRoll}
        />
        <article className={styles.gameCanvas__slider__percentage}>
          <p>0</p>
          <p>25</p>
          <p>50</p>
          <p>75</p>
          <p>100</p>
        </article>
        <div className={styles.separator} />
        <section className={styles.mobile__paper}>
          <div className={styles.gameBlock__payout__box}>
            <TextInput
              label={t('Payout')}
              isWithClear
              value={payout}
              onChangeValue={onChangePayout}
              classNameInput={cx(
                styles.gameBlock__input,
                styles.gameBlock__payout,
              )}
            />
            <div className={styles.gameBclock__rollOver__box}>
              <div className={styles.gameBlock__rollField}>
                <Text type="p">
                  {t('Roll over')}
                </Text>
                <div className={styles.gameBlock__rollOver}>
                  {roll}
                </div>
              </div>
              <ButtonIcon
                imageURL={ExchangeIcon}
                className={styles.gameBlock__rollButton}
                classNameImage={styles.rollButton__image}
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
              className={styles.winChance__button}
              onClick={onMinWinClick}
            >
              Min
            </Button>
            <Button
              className={styles.winChance__button}
              onClick={onWinStepMinus}
            >
              -5
            </Button>
            <Button
              className={styles.winChance__button}
              onClick={onWinStepPlus}
            >
              +5
            </Button>
            <Button
              className={styles.winChance__button}
              onClick={onMaxWinClick}
            >
              Max
            </Button>
          </div>
          <section className={styles.gameBlock__footer}>
            <div className={styles.buttons__box}>
              <ButtonIcon
                imageURL={GraphicIconBW}
                onClick={() => { onPopupOpen('betDetails'); }}
              />
              <ButtonIcon
                imageURL={FleurIconBW}
                onClick={() => { onPopupOpen('seedSettings'); }}
              />
              <ButtonIcon
                imageURL={VolumeIconBW}
                onClick={undefined}
              />
              <ButtonIcon
                imageURL={InfoIconBW}
                onClick={() => { onPopupOpen('help'); }}
              />
              <ButtonIcon
                imageURL={KeyboardIconBW}
                onClick={() => { onPopupOpen('hotkeys'); }}
              />
            </div>
            <Text type="p">
              {t('House Egde')}
              {' '}
              {edge}
              %
            </Text>
          </section>
          <Button
            onClick={undefined}
            className={styles.mobile_button__roll}
          >
            {t('Roll')}
          </Button>
        </section>
      </div>
      {isPopup !== '' && (
        <PopUp
          onClose={onPopupClose}
        >
          {popups[isPopup]}
        </PopUp>
      )}
    </>
  );
});

export { GameBlock };
