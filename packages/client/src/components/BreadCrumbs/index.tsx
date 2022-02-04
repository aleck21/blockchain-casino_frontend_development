import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { pageNames } from 'constants/pageNames';
import { ArrowGt } from '@project/libs/assets/images';
import styles from './styles.module.scss';

const BreadCrumbs = memo(() => {
  const { t } = useTranslation('main');
  const location = useLocation().pathname.split('/');
  const pageName = pageNames[location[1]];

  return (
    <article className={styles.dice__breadcrumbs}>
      <Link to="/">
        {t('Home')}
      </Link>
      &ensp;
      <Image url={ArrowGt} />
      &ensp;
      <span>
        {t(pageName)}
      </span>
    </article>
  );
});

export { BreadCrumbs };
