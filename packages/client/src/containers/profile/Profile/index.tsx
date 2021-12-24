import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { HeadPage } from 'components/HeadPage';
import { useTranslation } from '@project/libs/utils/i18n';
import { Paper } from 'components/Paper';
import { avatarDemo, Main } from './Main';
import { Membership } from './Membership';
import { Table } from 'components/Table';
import { dataTable } from './contentDemo';
import { StatisticsTitle } from './StatisticsTitle';
import { ButtonBlock } from './ButtonsBlock';
import { Image, Text } from '@project/libs/components';

export const Profile: React.FC = () => {
  const { t } = useTranslation('main');
  
  const contentDemo = {
    bgt: 500000,
    percentage: 11,
  }

  return(
    <section className={cx(styles.profile__container)}>
      <div className={cx(styles.profile__leftBlock)}>
        <HeadPage className={cx(styles.profile__head)}>
          {t('Profile')}
        </HeadPage>
        <Image url={avatarDemo} className={cx(styles.avatar__mobile)} />
        <Paper className={cx(styles.profile__panel)}>
          <Main />
        </Paper>
      </div>
      <div className={cx(styles.profile__rightBlock)}>
        <Membership />
        <Text type='p' className={cx(styles.text__box)}>
          {contentDemo.bgt.toLocaleString()} BGT and {contentDemo.percentage}% rakeback
        </Text>
        <ButtonBlock />
        <StatisticsTitle />
        <Table data={dataTable.data} head={dataTable.head} />
      </div>
    </section>
  );
}