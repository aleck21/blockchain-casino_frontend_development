import React, { memo } from 'react';
import { Link } from 'react-router-dom';
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
  link: string;
};

export const GameCard: React.FC<GameCardProps> = memo(({
  title,
  image,
  text,
  link,
}) => {
  const { t } = useTranslation('main');

  return (
    <section className={cx(styles.gameCard__container)}>
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
      <Link to={link}>
        <Button
          className={cx(styles.gameCard__button)}
        >
          {t('Play Now')}
        </Button>
      </Link>
    </section>
  );
});
