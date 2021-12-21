import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text } from '@project/libs/components';

const DEMO = {
  count: 12,
  rate: 8,
  name1: 'BTC',
  name2: 'ETH'
}

export const DoubleInput: React.FC = () => {
  const [currency1, setCurrency1] = useState(DEMO.count);
  
  const onChangeCurrency = (event: any) => {
    setCurrency1(event.target.value);
  }

  return(
    <div className={cx(styles.doubleInput__container)}>
      <div className={cx(styles.doubleInput__left)}>
        <div className={cx(styles.left__monitor)}>
          <Text type='p'>
            {currency1}&nbsp;
            <Text type='span'>
              {DEMO.name1}
            </Text>
          </Text>
        </div>
        <input type='text' value={currency1} onChange={onChangeCurrency} />
      </div>
      <div className={cx(styles.doubleInput__right)}>
        <div className={cx(styles.right__monitor)}>
          <Text type='p'>
            {currency1 * DEMO.rate}&nbsp;
            <Text type='span'>
              {DEMO.name2}
            </Text>
          </Text>
        </div>
        <input type='text' value={currency1 * DEMO.rate} />
      </div>
    </div>
  );
}