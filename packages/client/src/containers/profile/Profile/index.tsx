import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { HeadPage } from 'components/HeadPage';
import { useTranslation } from '@project/libs/utils/i18n';
import { Paper } from 'components/Paper';
import { Main } from './Main';

export const Profile: React.FC = () => {
  const { t } = useTranslation('main');
  
  return(
    <section className={cx(styles.profile__container)}>
      <HeadPage>
        {t('Profile')}
      </HeadPage>
      <Paper className={cx(styles.profile__panel)}>
        <Main />
      </Paper>
    </section>
  );
}