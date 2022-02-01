import React, { CSSProperties, useState } from 'react';
import cx from 'classnames';
import { Image } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';
import styles from './styles.module.scss';

type SelectProps = {
  list: { id: string | number, data: any }[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  callback?: Function;
  classArrow?: string;
  classItem?: string;
  classContainer?: string;
  classWrapContainer?: string;
  classItemsBlock?: string,
  stylesItems?: CSSProperties;
  stylesItem?: CSSProperties;
  stylesArrowBox?: CSSProperties;
  classHidden?: string;
};

export const SelectWithContent: React.FC<SelectProps> = ({
  list,
  callback,
  stylesItems,
  stylesItem,
  stylesArrowBox,
  classArrow,
  classItem,
  classHidden,
  classContainer,
  classWrapContainer,
  classItemsBlock,
}) => {
  const [rolled, setRolled] = useState(false);
  const [select, setSelect] = useState(0);

  const onRolled = () => {
    setRolled(!rolled);
  };

  const onSelect = (index: number) => {
    setSelect(index);
    if (callback) callback();
    setRolled(!rolled);
  };

  return (
    <div className={cx(classWrapContainer, styles.select__wrap__container)}>
      <div
        className={cx(styles.select__container, classContainer)}
        onClick={onRolled}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
      >
        <div className={cx(classItem, styles.selected__item)}>
          {list[select].data}
        </div>

        <div
          className={cx(classArrow, styles.select__arrow)}
          style={{ ...stylesArrowBox }}
        >
          <Image
            url={ArrowToDown}
            className={cx(rolled ? styles.unrolled : styles.rolledUp)}
          />
        </div>
      </div>
      <div
        className={cx(styles.select__itemsBlock, classItemsBlock,
          rolled ? styles.items__show : styles.items__hidden,
          !rolled ? classHidden : null)}
        style={{ ...stylesItems }}
      >
        {list.map((item, index) => (
          <div
            className={cx(
              classItem, styles.select__item,
              { [styles.select__item__selected]: index === select },
            )}
            key={item.id}
            onClick={() => onSelect(index)}
            style={{ ...stylesItem }}
            onKeyPress={() => {}}
            tabIndex={0}
            role="option"
            aria-selected
          >
            {item.data}
          </div>
        ))}
      </div>
    </div>
  );
};
