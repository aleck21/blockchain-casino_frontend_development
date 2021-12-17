import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';

export const Percentage: React.FC = () =>{
  const { t } = useTranslation('main');
  let unlockedPercentage = 75;
  const blueStyle = 
    cx(styles.progressbar__element, styles.progressbar__element__blue);
  const blackStyle = cx(styles.progressbar__element)


  return (
    <div className={cx(styles.percentage__block)}>
      <Text type='p' className={cx(styles.percantage__title)}>
        {t('Unlocked') + ' ' + unlockedPercentage + '%'}
      </Text>
      <div className={cx(styles.progressbar__block)}>
        <div className={unlockedPercentage >= 25 
          ? blueStyle 
          : blackStyle
        } />
        <div className={unlockedPercentage >= 50 
          ? blueStyle 
          : blackStyle
        } />
        <div className={unlockedPercentage >= 75 
          ? blueStyle 
          : blackStyle
        } />
        <div className={unlockedPercentage === 100
          ? blueStyle 
          : blackStyle
        } />
      </div>
    </div>
  );
}