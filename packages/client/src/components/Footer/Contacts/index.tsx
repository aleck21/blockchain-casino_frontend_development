import React, { FC } from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text } from '@project/libs/components';

import cx from 'classnames';
import styles from './styles.module.scss';

export const Contacts: FC = () => {
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.contacts__title)}>
        <Text
          type="p"
          className={cx(styles.contacts__text)}
        >
          {t('Contact Us')}
        </Text>
      </div>
      <div className={cx(styles.contacts__content)}>
        <div>
          <Text
            type="p"
            className={cx(styles.contacts__text)}
          >
            <>
              {t('Support')}
              <Text
                type="span"
                className={cx(styles.contacts__link)}
              >
                {t('janedoe@mail.com')}
              </Text>
            </>
          </Text>
          <Text
            type="p"
            className={cx(styles.contacts__text)}
          >
            <>
              {t('Support')}
              <a href="mailto:demo@mail.com">
                <Text
                  type="span"
                  className={cx(styles.contacts__link)}
                >
                  {t('janedoe@mail.com')}
                </Text>
              </a>
            </>
          </Text>
        </div>
        <div>
          <Text
            type="p"
            className={cx(styles.contacts__text)}
          >
            <>
              {t('Support')}
              <Text
                type="span"
                className={cx(styles.contacts__link)}
              >
                {t('janedoe@mail.com')}
              </Text>
            </>
          </Text>
          <Text
            type="p"
            className={cx(styles.contacts__text)}
          >
            <>
              {t('Support')}
              <Text
                type="span"
                className={cx(styles.contacts__link)}
              >
                {t('janedoe@mail.com')}
              </Text>
            </>
          </Text>
        </div>
      </div>
    </div>
  );
};
