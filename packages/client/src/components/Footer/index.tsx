import React, { FC } from 'react';
import cx from 'classnames';
// import { useTranslation } from '@project/libs/utils/i18n';
import { BunnyGameLogoBig } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';
import styles from './styles.module.scss';

export const Footer: FC = () =>
// const { t } = useTranslation('main');

  (
    <div className={cx(styles.container)}>
      <Image
        url={BunnyGameLogoBig}
        style={{
          width: 77,
          height: 51,
        }}
      />
    </div>
  );
