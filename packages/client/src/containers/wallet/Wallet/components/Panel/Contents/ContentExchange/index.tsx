import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { SelectWithResult } from 'components/SelectWithResult';
import { list, list2 } from './contentDemo';
import { Arrows } from './arrows';
import { DoubleInput } from 'components/DoubleInput';
import { Button } from 'components/Button';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';

export const ContentExchange: React.FC = () => {
  const { t } = useTranslation('main');
 
  return(
    <div className={cx(styles.exchange__container)}>
      <SelectWithResult
        list={list}
      />
      <Arrows />
      <SelectWithResult
        list={list2}
      />
      <div className={cx(styles.exchange__doubleInput__box)}>
        <div className={cx(styles.exchange__doubleInput__title)}>
          <Text type='p'>
            {t('You swap')}
          </Text>
          <Text type='p' className={cx(styles.right)}>
            {t('You will receive')}
          </Text>
        </div>
        <DoubleInput />
      </div>
      <div className={cx(styles.exchange__button__box)}>
        <Button
          text={t('Swap')}
          type='button'
          disabled={false}
          onClick={() => {}}
        />
      </div>
      <div className={cx(styles.exchange__free__box)}>
        <Text type='p'>
          Free: 12%, 0.125 BTC
        </Text>
      </div>
    </div>
  );
}