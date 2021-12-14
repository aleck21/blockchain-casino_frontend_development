import React, {
  FC, useCallback, useRef, useState,
} from 'react';
import cx from 'classnames';
import { FontIcon, FontIconName, Text } from '@project/libs/components';
import styles from './styles.module.scss';

interface Props {
  className?: string
  title: string
}

const SlideDropdown: FC<Props> = ({
  title, children, className,
}) => {
  const [isActive, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    if (!ref.current) return;
    setHeight(ref.current.scrollHeight);
    setActive((prevState) => (!prevState));
  }, [ref]);

  return (
    <div className={cx(styles.wrap, className)}>
      <div className={styles.title}>
        <Text
          className={cx(styles.text, { [styles.is_active]: isActive })}
          type="p"
        >
          {title}
        </Text>
        <button
          className={styles.button}
          onClick={toggle}
        >
          <FontIcon
            className={styles.icon}
            size={16}
            name={isActive ? FontIconName.MinusCircle : FontIconName.PlusCircle}
          />
        </button>
      </div>
      <div
        ref={ref}
        style={{ height: isActive ? height : 0 }}
        className={cx(styles.content)}
      >
        {children}
      </div>
    </div>
  );
};

export { SlideDropdown };
