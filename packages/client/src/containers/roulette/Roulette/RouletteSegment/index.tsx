import React, { memo } from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import { CurrencyColorIcons } from '@project/client/src/constants/currencies';
import styles from './styles.module.scss';

type RouletteSegmentProps = {
  color: string;
  quantity: string | number;
  currency: string;
  className: string;
};

export const RouletteSegment = memo(({
  color,
  quantity,
  currency,
  className,
}: RouletteSegmentProps) => (
  <div className={cx(styles.segment__container, className)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      fill="none"
      viewBox="0 0 204 126"
      className={cx(styles.segment__svg)}
    >
      <path
        id="path1066"
        fill={color}
        d="M 11.774288,125.73038 C -1.5089355,84.97097 -1.5475124,41.052509 11.664022,0.2696209 L 204.78361,62.830424 Z"
      />
      <path
        id="path1068"
        fillOpacity="0.4"
        fill="url(#paint0_radial_8_1753)"
        d="M 11.774288,125.73038 C -1.5089454,84.970969 -1.5475324,41.052508 11.664012,0.26962075 L 204.78361,62.830424 Z"
      />
      <defs
        id="defs1077"
      >
        <radialGradient
          gradientTransform="matrix(-200.44369,-4.7517199,4.7517199,-200.44369,204.78361,62.830424)"
          gradientUnits="userSpaceOnUse"
          r="1"
          cy="0"
          cx="0"
          id="paint0_radial_8_1753"
        >
          <stop
            id="stop1070"
            stopOpacity="0"
            stopColor="white"
            offset="0.633179"
          />
          <stop
            id="stop1072"
            stopOpacity="0.78"
            stopColor="white"
            offset="0.828125"
          />
          <stop
            id="stop1074"
            stopOpacity="0"
            stopColor="white"
            offset="1"
          />
        </radialGradient>
      </defs>
    </svg>
    <div className={cx(styles.segment__content)}>
      <Image url={CurrencyColorIcons[currency]} />
      <Text type="p">
        {quantity}
      </Text>
    </div>
  </div>
));
