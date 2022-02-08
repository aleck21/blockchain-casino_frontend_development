import React, { memo } from 'react';
import { Button, Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
// import { CloseIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

type DialogModalProps = {
  setNoValue: () => void;
  setYesValue: () => void;
  // onDialogClose: () => void;
};

const DialogModal = memo(({
  setNoValue,
  setYesValue,
  // onDialogClose,
}: DialogModalProps) => {
  const { t } = useTranslation('main');

  return (
    <section className={styles.dialog__content__container}>
      <Text type="h2">
        {t('Classic Dice bankroll')}
      </Text>
      <Text type="p">
        {t('Do you realy want to deposit funds to the “Classic Dice” BNB bankroll?')}
      </Text>
      <div className={styles.buttons__box}>
        <Button
          className={styles.outline}
          onClick={setNoValue}
        >
          {t('No')}
        </Button>
        <Button
          className={styles.blue}
          onClick={setYesValue}
        >
          {t('Yes')}
        </Button>
      </div>
    </section>
  );
});

export { DialogModal };
