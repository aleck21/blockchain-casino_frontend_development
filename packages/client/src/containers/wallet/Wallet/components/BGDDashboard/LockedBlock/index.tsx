import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';
import { content } from '../../../contentDemo';

export const LockedBlock: React.FC = () => {
  const { t } = useTranslation('main');
  const unlocked = content.unlocked;
  const locked = content.locked;  
  
  return(
    <div className={cx(styles.dashboard__lockedBlock)}>
      <div className={cx(styles.dashboard__lockedBlock__unlocked)}>
        <Text type='h6' className={cx(styles.dachboard__unlocked__h6)}>
          {t('Unlocked')}
        </Text>
        <Text
          type='p'
          className={cx(styles.dashboard__locked__count_white)}
        >
          {unlocked.count + ' '}
          <Text
            type='span'
            className={cx(styles.dashboard__locked__count_blue)}
          >
            {unlocked.currency}
          </Text>
        </Text>
      </div>
      <div className={cx(styles.dashboard__lockedBlock__locked)}>
        <Text
          type='h6'
          className={cx(styles.dachboard__unlocked__h6, styles.gray_text)}
        >
          {t('Locked')}
        </Text>
        <Text
          type='p'
          className={cx(styles.dashboard__locked__count)}
        >
          {locked.count + ' '}
          <Text
            type='span'
            className={cx(styles.dashboard__locked__count)}
          >
            {locked.currency}
          </Text>
        </Text>
      </div>
    </div>
  );
}