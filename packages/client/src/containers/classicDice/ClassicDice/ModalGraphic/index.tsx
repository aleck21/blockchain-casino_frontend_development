import React, { memo } from 'react';
import { ButtonIcon, Image, Text } from '@project/libs/components';
import { CloseIcon, GraphicIconColor } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from './styles.module.scss';

type ModalGraphicProps = {
  // datasWon: string[] | number[];
  // datasWagered: string[] | number[];
  wagered: string | number;
  won: string | number;
  rackeback: string | number;
  funds: string | number;
  currency: string;
  onClose: () => void;
};

const ModalGraphic = memo(({
  // datasWon,
  // datasWagered,
  wagered,
  won,
  rackeback,
  funds,
  currency,
  onClose,
}: ModalGraphicProps) => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__header}>
        <Text type="h3">
          {t('Life Stats')}
        </Text>
        <ButtonIcon
          imageURL={CloseIcon}
          onClick={onClose}
        />
      </div>
      <div className={styles.modal__summary}>
        <article>
          <Text type="p">
            {t('Wagered')}
          </Text>
          <Text
            type="p"
            className={cx(styles.modal__summary__value, styles.blue)}
          >
            {wagered}
            <span>
              {currency}
            </span>
          </Text>
        </article>
        <article>
          <Text type="p">
            {t('Won')}
          </Text>
          <Text
            type="p"
            className={cx(styles.modal__summary__value)}
          >
            {won}
            <span>
              {currency}
            </span>
          </Text>
        </article>
        <article>
          <Text type="p">
            {t('Rakeback collected')}
          </Text>
          <Text
            type="p"
            className={cx(styles.modal__summary__value)}
          >
            {rackeback}
            <span>
              {currency}
            </span>
          </Text>
        </article>
        <article>
          <Text type="p">
            {t('Funds unlocked')}
          </Text>
          <Text
            type="p"
            className={cx(styles.modal__summary__value)}
          >
            {funds}
            {' '}
            USD
          </Text>
        </article>
      </div>
      <Image
        url={GraphicIconColor}
        className={styles.modal__canvas}
      />
      <div className={styles.modal__footer}>
        <Text type="p">
          {t('Won 110')}
        </Text>
        <Text type="p">
          {t('Lose 10')}
        </Text>
      </div>
    </div>
  );
});

export { ModalGraphic };
