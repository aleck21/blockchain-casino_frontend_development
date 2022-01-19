import React, { memo } from 'react';
import cx from 'classnames';
import { Text } from '@project/libs/components';
import { Toggle } from 'components/Toggle';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

type SwitchItemProps = {
  text: string;
  name: string;
  value: string;
};

const SwitchItem = memo<SwitchItemProps>(({
  text,
  name,
  value,
}) => (
  <div className={cx(styles.switch__item__container)}>
    <Text type="p">
      {text}
    </Text>
    <Toggle
      name={name}
      value={value}
    />
  </div>
));

export const SwitchPanel = memo(() => {
  const { t } = useTranslation('main');

  const contentDemo = [
    {
      id: '00001',
      text: t('Enable 2FA'),
      param: '',
      name: '2fa',
    },
    {
      id: '00002',
      text: t('Hide my personal data'),
      param: '',
      name: 'personalData',
    },
  ];

  return (
    <section className={cx(styles.switch__container)}>
      {contentDemo.map((item) => (
        <SwitchItem
          text={item.text}
          key={item.id}
          name={item.name}
          value=""
        />
      ))}
    </section>
  );
});
