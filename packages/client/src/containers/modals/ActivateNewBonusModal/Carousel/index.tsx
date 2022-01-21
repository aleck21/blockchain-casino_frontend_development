import React, { memo, useMemo } from 'react';
import { Carousel as CarouselAntd } from 'antd';
import { Trans } from 'react-i18next';
import { BackArrowIcon, NextArrowIcon } from '@project/libs/assets/images';
import { ButtonIcon, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Bonuses } from '../contentDemo';
import './styles.scss';

type CarouselProps = {
  bonuses: Bonuses;
};

export const Carousel = memo(({
  bonuses,
}: CarouselProps) => {
  const { t } = useTranslation('main');

  const backArrow = useMemo(() => (
    <ButtonIcon
      imageURL={BackArrowIcon}
      className="slik-prev"
    />
  ), []);

  const nextArrow = useMemo(() => (
    <ButtonIcon
      imageURL={NextArrowIcon}
      className="slik-next"
    />
  ), []);

  return (
    <section className="activate__carousel__container">
      <CarouselAntd
        arrows
        prevArrow={backArrow}
        nextArrow={nextArrow}
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
                  {{ sizeBonus: bonus.sizeBonus }}
                </b>
                <b> BGD</b>
                {' '}
                bonus for the next
                {' '}
                {{ quanityDeposit: bonus.deposit }}
                {' '}
                USD deposit
              </Trans>
            </Text>
          </div>
        ))}
      </CarouselAntd>
    </section>
  );
});
