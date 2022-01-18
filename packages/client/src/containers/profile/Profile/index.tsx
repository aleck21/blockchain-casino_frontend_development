import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Table } from 'containers/profile/Profile/Table';
import { Image, Text } from '@project/libs/components';
import styles from './styles.module.scss';
import { avatarDemo, Main } from './Main';
import { Membership } from './Membership';
import { dataTable } from './contentDemo';
import { StatisticsTitle } from './StatisticsTitle';
import { ButtonBlock } from './ButtonsBlock';

export const Profile: React.FC = () => {
  const { t } = useTranslation('main');

  const contentDemo = {
    bgt: 500000,
    percentage: 11,
  };

  return (
    <section className={cx(styles.profile__container)}>
      <div className={cx(styles.profile__leftBlock)}>
        <Text
          type="h2"
          className={cx(styles.profile__head)}
        >
          {t('Profile')}
        </Text>
        <Image
          url={avatarDemo}
          className={cx(styles.avatar__mobile)}
        />
        <Main />
      </div>
      <div className={cx(styles.profile__rightBlock)}>
        <Membership />
        <Text
          type="p"
          className={cx(styles.text__box)}
        >
          {contentDemo.bgt.toLocaleString()}
          {' '}
          BGT and
          {contentDemo.percentage}
          % rakeback
        </Text>
        <ButtonBlock />
        <StatisticsTitle />
        <Table
          data={dataTable}
        />
      </div>
    </section>
  );
};
