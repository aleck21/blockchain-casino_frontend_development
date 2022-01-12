import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { IconCopy } from '@project/libs/assets/images';
import { Image } from '@project/libs/components';
import styles from './styles.module.scss';
import { notification } from './contentDemo';

export const Notification: React.FC = () => {
  const { t } = useTranslation('main');
  const l = notification.length;

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
      })
      .catch((error) => {
        console.log(`Error copying to clipboard: ${error}`);
      });
  };

  return (
    <section className={cx(styles.notification__container)}>
      <h2 className={cx(styles.notification__head)}>
        {t('Notifications')}
      </h2>
      <section className={cx(styles.notification__main)}>
        {notification.map((item, key) => (
          item.isPromocode
            ? (
              <article
                className={cx(styles.promocode__box)}
                key={item.id}
              >
                <h6>{item.title}</h6>
                <div className={cx(item.isNew
                  ? styles.new__icon
                  : styles.new__icon__hidden)}
                />
                <div className={cx(styles.promocode__body)}>
                  <p>{item.body}</p>
                  <div
                    onClick={() => onCopy(item.body)}
                    onKeyPress={() => {}}
                    role="button"
                    tabIndex={0}
                  >
                    <Image url={IconCopy} />
                  </div>
                </div>
              </article>
            )
            : (
              <article
                className={cx(
                  styles.notification__item__box,
                  key === l - 1 && styles.no__border,
                )}
                key={item.id}
              >
                <h6>
                  {item.title}
                  {' '}
                  <span>{item.date.toLocaleDateString('en-GB')}</span>
                </h6>
                <div className={cx(item.isNew
                  ? styles.new__icon
                  : styles.new__icon__hidden)}
                />
                <p>{item.body}</p>
              </article>
            )
        ))}
      </section>
    </section>
  );
};
