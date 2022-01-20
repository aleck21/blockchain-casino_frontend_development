import React, { useMemo, memo } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Carousel } from 'antd';
import { Trans } from 'react-i18next';
import {
  Button,
  ButtonIcon,
  Text,
} from '@project/libs/components';
import { BackArrowIcon, NextArrowIcon } from '@project/libs/assets/images';
import { bonuses, quanityDeposit, sizeBonus } from './contentDemo';
import styles from './styles.module.scss';
import './stylesCarousel.scss';

const demoLastsTime = new Date().getTime() - 1000 * 60 * 60 * 10 + 1000 * 60 * 25 + 1000 * 15;

export const ActivateNewBonusModal = memo(() => {
  const { t } = useTranslation('main');

  const BackArrow = useMemo(() => (
    <ButtonIcon
      imageURL={BackArrowIcon}
      className="slik-prev"
    />
  ), []);

  const NextArrow = useMemo(() => (
    <ButtonIcon
      imageURL={NextArrowIcon}
      className="slik-next"
    />
  ), []);

  const lastsTime = intervalToDuration({
    start: (demoLastsTime),
    end: new Date(),
  });

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
      <section className="activate__carousel__container">

        <Carousel
          arrows
          prevArrow={BackArrow}
          nextArrow={NextArrow}
        >
          {bonuses.map((bonus) => (
            <div
              className="activate__bonus__box"
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
      </section>
      <section className={cx(styles.activate__form)}>
        <Text type="h5">
          {t('Are you sure that you want to use the code?')}
        </Text>
        <Text type="p">
          {t('It-will-work-during')}
        </Text>
        <div className={cx(styles.activate__buttons__box)}>
          <Button
            className={cx(styles.cancel)}
            onClick={undefined}
          >
            {t('Cancel')}
          </Button>
          <Button
            className={cx(styles.use)}
            onClick={undefined}
          >
            {t('Use')}
          </Button>
        </div>
      </section>
    </div>
  );
});
