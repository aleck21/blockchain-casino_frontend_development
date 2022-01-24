import React, { useCallback, useState } from 'react';
import cx from 'classnames';
import { Button, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';
import { spinsQuantity, users, rouletteData } from './contentDemo';
import { Timer } from './Timer';
import { GameMonitor } from './GameMonitor';
import { RouletteSpinner } from './RouletteSpinner';

export const Roulette: React.FC = React.memo(() => {
  const { t } = useTranslation('main');
  const [isSpining, setIsSpining] = useState(false);
  const [spin, setSpin] = useState(0);
  const [usersIndex, setUsersIndex] = useState(0);

  const onSpinClick = useCallback(() => {
    const random = Math.floor(Math.random() * 10);
    setSpin(spin + random);
    setUsersIndex(random);
    setIsSpining(!isSpining);
  }, [isSpining, spin]);

  return (
    <section className={cx(styles.roulette__container)}>
      <Text
        type="h3"
        className={cx(styles.roulette__title)}
      >
        {t('Roulette')}
      </Text>
      <div className={cx(styles.roulette__content__box)}>
        <div className={cx(styles.roulette__left_box)}>
          <RouletteSpinner
            spin={spin}
            data={rouletteData}
          />
          <div className={cx(styles.roulette__spining_box)}>
            <Text
              type="p"
              className={cx(styles.spining)}
            >
              {isSpining
                ? t('Next free spin in')
                : (
                  <>
                    {t('You have')}
                    &ensp;
                    <strong>{spinsQuantity}</strong>
                    &ensp;
                    {t('spins')}
                  </>
                )}
            </Text>
            {isSpining
              ? (
                <Timer
                  hours={12}
                  minutes={54}
                  seconds={32}
                />
              )
              : (
                <Button
                  onClick={onSpinClick}
                  className={cx(styles.spin__button)}
                >
                  {t('Spin!')}
                </Button>
              )}
          </div>
        </div>
        <div className={cx(styles.roulette__info)}>
          <div className={cx(styles.roulette__info__textBlock)}>
            <Text type="p">Roulette rules</Text>
            <Text type="p">
              Classic dice is a game, where a user can choose a number
              (let it be X) between 0 and M, where M is max dice mean
              (in BC.Game it&apos;s 100), and make a bet that the next generated
              random number will be greater or less than X. Using X and the
              user&apos;s prediction, the system will calculate the user&apos;s
              win chance (P) and victory Classic dice is a game, where a user
              can choose a number (let it be X) between 0 and M, where M is max
              dice mean (in BC.Game it&apos;s 100), and make a bet that the next
              generated random number will be greater or less than X. Using X
              and the user&apos;s prediction, the system will calculate the user
              &apos;s win chance (P) and victory Classic dice is a game, where a
              user can choose a number (let it be X) between 0 and M, where M is
              max dice mean (in BC.Game it&apos;s 100), and make a bet that the
              next generated random number will be greater or less than X. Using
              X and the user&apos;s prediction, the system will calculate the
            </Text>
          </div>
          <div className={cx(styles.roulette__info__gameMonitor)}>
            <GameMonitor
              userItems={users}
              index={usersIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
