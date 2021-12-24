import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Paper } from 'components/Paper';
import { GoldBunny } from '@project/libs/assets/images';
import { ProgressBar } from 'components/ProgressBar';

export const Membership: React.FC = () => {
  const { t } = useTranslation('main');

  const progressDemo = {
    quanity: 105000,
    of: 130000
  }

  return(
    <div className={cx(styles.membership__container)}>
      <Text type='h3'>
        {t('Membership level progress')}
      </Text>
      <Paper className={cx(styles.membership__paper)}>
        <div className={cx(styles.membership__type)}>
          <Image url={GoldBunny} />
          <Text type='p'>
            Gold Bunny 3
          </Text>
        </div>
        <ProgressBar quanity={progressDemo.quanity} ofValue={progressDemo.of} />
      </Paper>
    </div>
  );
}