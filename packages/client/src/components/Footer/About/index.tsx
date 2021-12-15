import React, { FC } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { BunnyGameLogoBig } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';

import cx from 'classnames';
import styles from './styles.module.scss';

export const About: FC = () => {
  const { t } = useTranslation('main');

  return(
    <div className={cx(styles.container)}>
      <Image
        url={BunnyGameLogoBig}
        className={cx(styles.about__logo)}
      />
      <Text type='p' className={cx(styles.about__text)}>
        {t('Classic dice is a game, where a user can choose a number (let it be X) between 0 and M, where M is max dice mean (in BC.Game it’s 100), and make a bet that the')}
      </Text>
    </div>
  );
}