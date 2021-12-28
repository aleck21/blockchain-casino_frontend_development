import React, { CSSProperties, useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';

type SelectProps = {
  list: {id: string | number, data: any}[];
  callback?: Function;
  classBox?: string;
  classArrow?: string;
  classItems?: string;
  classItem?: string;
  classContainer?: string;
  stylesItems?: CSSProperties;
  stylesItem?: CSSProperties;
  stylesArrowBox?: CSSProperties;
  classHidden?: string;
};

export const Select: React.FC<SelectProps> = ({
  list,
  callback,
  stylesItems,
  stylesItem,
  stylesArrowBox,
  classArrow,
  classItems,
  classItem,
  classHidden,
  classContainer
}) => {
  const [ rolled, setRolled ] = useState(false);
  const [ content, setContent ] = useState(list);

  const onRolled = () => {
    setRolled(!rolled);
  }
  
  const onSelect = (index: number) => {
    const l = content.length;
    const newList = [content[index]];
    for (let i = 0; i < l; i++) {
      if (i === index) continue;
      newList.push(content[i]);
    }
    setContent(newList);
    if (callback) callback();
  }

  return(
    <div className={cx(styles.select__container, classContainer)} onClick={onRolled}>
      <div
        className={cx(styles.select__itemsBlock, classItems,
          rolled ? styles.items__show : styles.items__hidden, 
          !rolled ? classHidden : null
        )}
        style={{ ...stylesItems }}
      >
        {content.map((item, index) => (
          <div
            className={cx(classItem, styles.select__item)}
            key={item.id}
            onClick={() => onSelect(index)}
            style={{ ...stylesItem }}
          >
            {item.data}
          </div>
        ))}
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
  );
}
