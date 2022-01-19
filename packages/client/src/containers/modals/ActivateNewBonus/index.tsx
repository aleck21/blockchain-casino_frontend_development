import React, { CSSProperties, memo } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Carousel } from 'antd';
import { Trans } from 'react-i18next';
import { Button, Image, Text } from '@project/libs/components';
import { quanityDeposit, sizeBonus } from 'constants/bonus';
import { BackArrowIcon, NextArrowIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';
import { bonuses } from './contentDemo';

const demoLastsTime = new Date().getTime() - 1000 * 60 * 60 * 10 + 1000 * 60 * 25 + 1000 * 15;

type Arrow = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const BackArrow: React.FC<Arrow> = ({
  className,
  style,
  onClick,
}) => (
  <Button
    onClick={onClick}
    className={className}
    style={style}
  >
    <Image url={BackArrowIcon} />
  </Button>
);

const NextArrow: React.FC<Arrow> = ({
  className,
  style,
  onClick,
}) => (
  <Button
    onClick={onClick}
    className={className}
    style={style}
  >
    <Image url={NextArrowIcon} />
  </Button>
);

export const ActivateNewBonus = memo(() => {
  const { t } = useTranslation('main');
  // const slider = useRef(null);

  const lastsTime = intervalToDuration({
    start: (demoLastsTime),
    end: new Date(),
  });

  const settings = {
    prevArrow: <BackArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className={cx(styles.activate__container)}>
      <Text type="h3">
        {t('Activating new bonus')}
      </Text>
      <section className={cx(styles.activate__activeBonus__box)}>
        <Text type="h6">
          {t('Active Bonus')}
        </Text>
        <Text type="p">
          <Trans i18nKey="active-bonus">
            <b>
              {{ sizeBonus: sizeBonus.b1000 }}
            </b>
            <b> BGD</b>
            {' '}
            bonus for the next
            {' '}
            {{ quanityDeposit: quanityDeposit.b1000 }}
            {' '}
            USD deposit
          </Trans>
        </Text>
        <Text
          type="p"
          className={cx(styles.activate__activeBounus__lasts)}
        >
          {t('Lasts in')}
          {' '}
          {lastsTime.hours}
          {'h '}
          {lastsTime.minutes}
          {'m '}
          {lastsTime.seconds}
          s
        </Text>
      </section>
      <Carousel
        arrows
        {...settings}
      >
        {bonuses.map((bonus) => (
          <div
            className={cx(styles.activate__bonus__box)}
            key={bonus.id}
          >
            <Text type="h6">
              {bonus.isNew ? t('New Code') : t('Code')}
            </Text>
            <Text type="p">
              <Trans i18nKey="active-bonus">
                <b>
                  {{ sizeBonus: sizeBonus[bonus.type] }}
                </b>
                <b> BGD</b>
                {' '}
                bonus for the next
                {' '}
                {{ quanityDeposit: quanityDeposit[bonus.type] }}
                {' '}
                USD deposit
              </Trans>
            </Text>
          </div>
        ))}
      </Carousel>
      {/*
      <ButtonIcon
        onClick={() => slider.current.prev()}
        imageURL={BackArrowIcon}
        className={cx(styles.activate__backButton)}
      />
      <ButtonIcon
        onClick={() => slider.current.next()}
        imageURL={NextArrowIcon}
        className={cx(styles.activate__nextButton)}
      />
      */}
    </div>
  );
});
