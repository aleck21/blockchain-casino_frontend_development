import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { ClasicDice, Crash } from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { WelcomBlock } from './WelcomBlock';
import { GameCard } from './GameCard';

const HomeDemo: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <WelcomBlock />
      <GameCard
        title="Classic Dice"
        image={ClasicDice}
        text={t('Classic dice is a game, where a user can choose a number (let it be X) between 0 and M, where M is max dice mean (in BC.Game it’s 100), and make a bet that the next generated random number will be greater or less than X. ')}
        onClick={() => {}}
      />
      <GameCard
        title="Crash"
        image={Crash}
        text={t('Classic dice is a game, where a user can choose a number (let it be X) between 0 and M, where M is max dice mean (in BC.Game it’s 100), and make a bet that the next generated random number will be greater or less than X. ')}
        onClick={() => {}}
      />
    </div>
  );
};

export { HomeDemo };
