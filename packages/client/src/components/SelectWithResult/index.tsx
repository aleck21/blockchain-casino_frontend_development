import React, { useState } from 'react';
import { Image, Text } from '@project/libs/components';
import { ArrowToDown } from '@project/libs/assets/images';
import cx from 'classnames';
import styles from './styles.module.scss';
import { useTranslation } from '@project/libs/utils/i18n';

type SelectProps = {
  list: {element: JSX.Element; result: string | number}[];
  defaultItem?: string | number;
  className?: string;
}

export const SelectWithResult: React.FC<SelectProps> = ({
  list,
  defaultItem,
  className
}) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(list);
  
  const openList = () => {
    setOpen(!open);
  };

  const { t } = useTranslation('main');
  
  const onSelect = (index: number) => {
    const l = content.length;
    const newList = [content[index]];
    for (let i = 0; i < l; i++) {
      if (i === index) continue;
      newList.push(content[i]);
    }
    setContent(newList);
    setOpen(false);
  }

  return(
    <div className={cx(styles.select__container)}>
      <div className={cx(styles.selectBlock)}>
        <div className={cx(styles.selectBlock__content, open
          ? styles.open : styles.hidden
        )}>
          {content.map((itemList, k) => (
            <div
              className={cx(styles.content__item)}
              key={`select_item_${k}`}
              onClick={() => onSelect(k)}
            >
              {itemList.element}
            </div>
          ))}
        </div>
        <div className={cx(styles.selectBlock__arrow)} onClick={openList}>
          <Image
            url={ArrowToDown}
            className={cx(open ? styles.arrow__up : styles.arrow__down)}
          />
        </div>
      </div>
      <div className={cx(styles.resultBlock)}>
        <Text type='p' className={cx(styles.resultBlock__title)}>
          {t('Balance')}
        </Text>
        <Text type='p' className={cx(styles.resultBlock__text)}>
          {list[0].result.toLocaleString('en-EN', {useGrouping: true})}
        </Text>
      </div>
    </div>
  );
}