import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import styles from './styles.module.scss';

export const WelcomBlock: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.welcom__container)}>
      <Text type="h2">
        {t('Welcome to BunnyGame Casino!')}
      </Text>
      <Text type="p">
        Classic dice is a game, where a user can choose a number (let it be X)
        between 0 and M, where M is max dice mean (in BC.Game it’s 100), and
        make a bet that the
      </Text>
    </div>
  );
};
