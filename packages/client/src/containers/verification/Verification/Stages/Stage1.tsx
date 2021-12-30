import React from 'react';
import { useTranslation } from '@project/libs/utils/i18n';
import cx from 'classnames';
import styles from '../styles.module.scss';
import { Button } from 'components/Button';
import { WrapSelect } from 'components/WrapSelect';
import '../select.scss';

export type StageProps = {
  goNextStage: Function;
}

export const Stage1: React.FC<StageProps> = ({
  goNextStage,
}) => {
  const { t } = useTranslation('main');
  
  return(
    <>
      <p className={cx(styles.white__text)}>
        {t('You can get BGD through deposit bonus and other activities. You can also directly exchange other currencies into the available balance of BCD through the BCSwap function in the wallet. You can get BGD through deposit bonus and other activities. You can also directly exchange other currencies into the available balance of BCD through the BCSwap function in the wallet.')}
      </p>
      <p className={cx(styles.gray__text)}>
        {t('You can get BGD through deposit bonus and other activities. You can also directly exchange other currencies into the available balance of BCD through the BCSwap function in the wallet. You can get BGD through deposit bonus and other activities. You can also directly exchange other currencies into the available balance of BCD through the BCSwap function in the wallet.You can get BGD through deposit bonus and other activities. You can also directly exchange other currencies into the available balance of BCD through the BCSwap function in the wallet. You can get BGD through deposit bonus and other activities. You can also directly exchange other currencies into the available balance of BCD through the BCSwap function in the wallet.')}
      </p>
      <footer className={cx(styles.verification__footer)}>
        <div className={cx(styles.stage1__buttons)}>
          <div className={cx(styles.stage1__input__box)}>
            <p>{t('Game')}</p>
            <div className={'verification__select'}>
              <WrapSelect
                list={[
                  {value: 'dice', text: 'Dice'},
                  {value: 'crash', text: 'Crash'},
                  {value: 'classic_dice', text: 'Classic Dice'}
                ]}
                // classNameContainer={'verification__select'}
              />
            </div>
          </div>
          <Button
            text={t('Validate')}
            className={cx(styles.validate__button)}
            onClick={goNextStage}
          />
        </div>
      </footer>
    </>
  );
}