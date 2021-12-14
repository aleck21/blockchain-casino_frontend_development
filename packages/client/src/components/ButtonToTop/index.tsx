import React, { useCallback, FC } from 'react';
import { animateScroll } from 'react-scroll';
import cx from 'classnames';
import { useScrollEffect } from '@project/libs/hooks/useScrollEffect';
import { FontIcon, FontIconName } from '@project/libs/components/inputs/FontIcon';
import styles from './styles.module.scss';

export const ButtonToTop: FC = () => {
  const { offsetY } = useScrollEffect();

  const reached = offsetY > 800;
  const onClick = useCallback(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <button
      onClick={onClick}
      className={cx(styles.button, { [styles.hidden]: reached })}
    >
      <FontIcon
        name={FontIconName.ArrowUp}
        size={18}
      />
    </button>
  );
};
