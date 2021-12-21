import React, { useState } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';

type SelectProps = {
  data: {
    icon: string;
    type: 'BTC' | 'ETH' | 'BNB' | string;
    name: string;
    balance: number | string
  }[]
};

export const Select: React.FC<SelectProps> = ({data}) => {
  const { t } = useTranslation('main');
  const [ currency, setCurrency ] = useState(0);

  const onChangeCurrency = () => {

  }

  return (
    <div className={cx(styles.select__container)}>
      <div className={cx(styles.select__chnageElement)}>
        <Image
          url={data[currency].icon}
          className={cx(styles.changeElement__icon)}
        />
        <Text type='p' className={cx(styles.changeElement__name)}>
          {data[currency].name}
        </Text>
        <Text type='p' className={cx(styles.changeElement__type)}>
          {data[currency].type}
        </Text>
        <div onClick={onChangeCurrency}>
          <Image url={ArrowToDown} className={cx(styles.changeElement__arrow)} />
        </div>
      </div>
      <div className={cx(styles.select__result)}>
        <Text type='p' className={cx(styles.select__result__title)}>
          {t('Balance')}
        </Text>
        <Text type='p' className={cx(styles.select__result__content)}>
          {data[currency].balance}
        </Text>
      </div>
    </div>
  );
}