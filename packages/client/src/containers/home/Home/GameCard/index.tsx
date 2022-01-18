import React, { memo } from 'react';
import cx from 'classnames';
import {
  Button,
  Image,
  Text,
} from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

type GameCardProps = {
  title: string;
  image: string;
  text: string;
  onClick: () => void;
};

export const GameCard: React.FC<GameCardProps> = memo(({
  title,
  image,
  text,
  onClick,
}) => {
  const { t } = useTranslation('main');

  return (
    <section className={cx(styles.gameCard__paper)}>
      <div className={cx(styles.gameCard__container)}>
        <Text type="h3">
          {title}
        </Text>
        <div className={cx(styles.gameCard__imageBox)}>
          <Image url={image} />
        </div>
        <div className={cx(styles.gameCard__textBox)}>
          <Text type="p">
            {text}
          </Text>
        </div>
        <Button
          onClick={onClick}
          className={cx(styles.gameCard__button)}
        >
          {t('Play Now')}
        </Button>
      </div>
    </section>
  );
});
