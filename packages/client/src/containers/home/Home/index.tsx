import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { ClasicDice, Crash } from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { WelcomBlock } from './WelcomBlock';
import { GameCard } from './GameCard';

const Home: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <WelcomBlock />
      <GameCard
        title="Classic Dice"
        image={ClasicDice}
        text={t('Classic-dice-is-a-game')}
        link="/classicDice"
      />
      <GameCard
        title="Crash"
        image={Crash}
        text={t('Classic-dice-is-a-game')}
        link="/"
      />
    </div>
  );
};

export { Home };
