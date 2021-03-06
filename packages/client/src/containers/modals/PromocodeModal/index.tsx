import React, { useState } from 'react';
import {
  Text,
  Button,
  TextInput,
} from '@project/libs/components';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

export const PromocodeModal: React.FC = () => {
  const codeDemo = 'q10358vn1983tvn';
  const [promocode, setPromocode] = useState(codeDemo);
  const { t } = useTranslation('main');

  return (
    <div className={cx(styles.promocode__container)}>
      <div className={cx(styles.promocode__head)}>
        <Text
          type="h3"
          className={cx(styles.promocode__title)}
        >
          {t('Promo code')}
        </Text>
      </div>
      <form>
        <TextInput
          name="promocode"
          label={t('Your promo code')}
          classNameInput={cx(styles.promocode__input)}
          classNameContainer={cx(styles.promocode__input__container)}
          value={promocode}
          onChangeValue={setPromocode}
          isWithClear
        />
        <Text
          type="h4"
          className={cx(styles.promocode__subTitle)}
        >
          {t('You will receive')}
          :
        </Text>
        <Text
          type="p"
          className={cx(styles.promocode__text)}
        >
          {t('Classic dice is a game, where a user can choose a number (let it be X) between 0 and M, where M is max dice mean (in BC.Game it’s 100), and make a bet that the next generated random number will be greater or less than X. Using X and the user\'s prediction, the system will calculate the user\'s win chance (P) and victory')}
        </Text>
        <Button
          onClick={() => {}}
          className={cx(styles.promocode__submitButton)}
        >
          {t('Use promo code')}
        </Button>
      </form>
    </div>
  );
};
