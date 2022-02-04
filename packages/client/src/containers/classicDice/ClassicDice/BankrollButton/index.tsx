import { Button, Text, Image } from '@project/libs/components';
import React, { memo, useContext, useCallback } from 'react';
import { CurrencyColorIcons } from 'constants/currencies';
import { ModalName } from 'constants/modals';
import { ModalContext } from 'context';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

type BankrollProps = {
  currency: string;
  quantity: string | number;
};

const BankrollButton = memo(({
  currency,
  quantity,
}: BankrollProps) => {
  const { t } = useTranslation('main');
  const { openModal, setContentModal } = useContext(ModalContext);

  const onBankrollButtonClick = useCallback(() => {
    setContentModal(ModalName.classicDiceBankroll);
    openModal();
  }, [setContentModal, openModal]);

  return (
    <div className={styles.bankroll__button__container}>
      <Button
        onClick={onBankrollButtonClick}
        className={styles.bankroll}
      >
        <Text type="p">
          {t('Bankroll')}
        </Text>
        <div className={styles.button__content}>
          <Image url={CurrencyColorIcons[currency]} />
          <Text type="p">
            {quantity}
          </Text>
        </div>
      </Button>
    </div>
  );
});

export { BankrollButton };
