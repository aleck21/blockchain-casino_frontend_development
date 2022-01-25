import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { TableGrid } from './TableGrid';
import { BalanceItem } from './BalaceItem';
import { content } from '../contentDemo';
import styles from './styles.module.scss';

const Balance: FC = () => {
  const { t } = useTranslation('main');
  const items = content.balance;

  return (
    <div className={cx(styles.wallet__balance)}>
      <TableGrid title={t('Balance')}>
        {items.map((item) => (
          <BalanceItem
            key={item.id}
            {...item}
          />
        ))}
      </TableGrid>
    </div>
  );
};

export { Balance };
