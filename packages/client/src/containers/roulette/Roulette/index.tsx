import React from 'react';
import cx from 'classnames';
import { ButtonWithContent as Button, Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { RouletteDemo } from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { spins } from './contentDemo';

export const Roulette: React.FC = () => {
  const { t } = useTranslation('main');
  return (
    <section className={cx(styles.roulette__container)}>
      <Text
        type="h3"
        className={cx(styles.roulette__title)}
      >
        {t('Roulette')}
      </Text>
      <div className={cx(styles.roulette__content__box)}>
        <div className={cx(styles.roulette__game)}>
          <Image url={RouletteDemo} />
          <Text type="p">
            {t('You have')}
            &ensp;
            <strong>{spins}</strong>
            &ensp;
            {t('spins')}
          </Text>
          <Button
            text={t('Spin!')}
            onClick={() => {}}
            className={cx(styles.spin__button)}
          />
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
            <div />
          </div>
        </div>
      </div>
    </section>
  );
};
