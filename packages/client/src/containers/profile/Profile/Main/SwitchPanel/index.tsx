import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Text } from '@project/libs/components';
import { Toggle } from 'components/Toggle';
import { useTranslation } from '@project/libs/utils/i18n';

type SwitchItemProps = {
  text: string;
  key: number | string;
}

const SwitchItem: React.FC<SwitchItemProps> = ({
  text,
  key
}) => {
  return(
    <div className={cx(styles.switch__item__container)} key={key}>
      <Text type='p'>
        {text}
      </Text>
      <Toggle />
    </div>
  );
}

export const SwitchPanel: React.FC = () => {
  const { t } = useTranslation('main');

  const contentDemo = [
    {
      text: t('Enable 2FA'),
      param: ''
    },
    {
      text: t('Hide my personal data'),
      param: ''
    }
  ];

  return(
    <section className={cx(styles.switch__container)}>
      {contentDemo.map((item, key) => (
        <SwitchItem text={item.text} key={`switch_item_${key}`} />
      ))}
    </section>
  );
}