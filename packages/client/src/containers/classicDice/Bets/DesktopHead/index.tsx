import React, { memo } from 'react';
import { Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

type DesktopHeadProps = {
  title: string;
  rake?: string | number;
  rakeback?: string | number;
};

const DesktopHead = memo(({
  title,
  rake,
  rakeback,
}: DesktopHeadProps) => {
  const { t } = useTranslation('main');

  if (rake !== undefined && rakeback !== undefined) {
    return (
      <header className={styles.betsHeader__container}>
        <h2>{title}</h2>
        <div className={styles.betsHeader__buttonsBox}>
          <div className={styles.betsHeader__button}>
            {t('Rake')}
            {' − '}
            <span>
              {rake}
              %
            </span>
          </div>
          <div className={styles.betsHeader__button}>
            {t('Your rakeback')}
            {' − '}
            <span>
              {rakeback}
              %
            </span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <Text
      type="h2"
      className={styles.betsHeader}
    >
      {title}
    </Text>
  );
});

export { DesktopHead };
