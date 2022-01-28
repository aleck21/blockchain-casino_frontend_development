import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Button, Image, Text } from '@project/libs/components';
import { CurrencyColorIcons } from 'constants/currencies';
import cx from 'classnames';
import styles from './styles.module.scss';
import { bankroll } from './contentDemo';
import { RollPanel } from './RollPanel';
import { GameBlock } from './GameBlock';

const ClassicDice: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.dice__container)}>
      <header className={cx(styles.dice__header)}>
        <Text type="h1">
          {t('Classic Dice')}
        </Text>
        <Button
          onClick={() => {}}
          className={cx(styles.bankroll)}
        >
          <Text type="p">
            {t('Bankroll')}
          </Text>
          <div className={cx(styles.button__content)}>
            <Image url={CurrencyColorIcons[bankroll.currency]} />
            <Text type="p">
              {bankroll.quantity}
            </Text>
          </div>
        </Button>
      </header>
      <section className={cx(styles.dice__paper)}>
        <GameBlock />
        <RollPanel />
      </section>
    </div>
  );
};

export { ClassicDice };
