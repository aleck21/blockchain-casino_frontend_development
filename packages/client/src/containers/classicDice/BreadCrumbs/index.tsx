import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { ArrowGt } from '@project/libs/assets/images';
import styles from './styles.module.scss';

const BreadCrumbs = memo(() => {
  const { t } = useTranslation('main');

  return (
    <article className={styles.dice__breadcrumbs}>
      <Link to="/">
        {t('Home')}
      </Link>
      &ensp;
      <Image url={ArrowGt} />
      &ensp;
      <span>
        {t('Classic Dice')}
      </span>
    </article>
  );
});

export { BreadCrumbs };
