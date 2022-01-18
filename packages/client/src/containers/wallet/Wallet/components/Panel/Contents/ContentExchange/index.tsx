import React from 'react';
import cx from 'classnames';
import { SelectWithResult } from 'components/SelectWithResult';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text, Button, DoubleInput } from '@project/libs/components';
import { Arrows } from './arrows';
import { list, list2 } from './contentDemo';
import styles from './styles.module.scss';

export const ContentExchange: React.FC = () => {
  const { t } = useTranslation('main');

  return (
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
          <Text type="p">
            {t('You swap')}
          </Text>
          <Text
            type="p"
            className={cx(styles.right)}
          >
            {t('You will receive')}
          </Text>
        </div>
        <DoubleInput />
      </div>
      <div className={cx(styles.exchange__button__box)}>
        <Button
          type="button"
          onClick={() => {}}
        >
          {t('Swap')}
        </Button>
      </div>
      <div className={cx(styles.exchange__free__box)}>
        <Text type="p">
          Free: 12%, 0.125 BTC
        </Text>
      </div>
    </div>
  );
};
