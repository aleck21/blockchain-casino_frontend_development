import React, { useState } from 'react';
import cx from 'classnames';
import { Image, Text } from '@project/libs/components';
import { BackArrow } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';
import { Stage1 } from './Stages/Stage1';
import { Stage2 } from './Stages/Stage2';
import { Stage3 } from './Stages/Stage3';
import { Stage4 } from './Stages/Stage4';

export const Verification: React.FC = () => {
  const { t } = useTranslation('main');
  const [stage, setStage] = useState(1);

  const goBack = () => {
    if (stage === 1) return;
    setStage(stage - 1);
  };

  const goNextStage = () => {
    setStage(stage + 1);
  };

  return (
    <div className={cx(styles.verification__paper)}>
      <header className={cx(styles.verification__header)}>
        <div
          className={cx(
            styles.verification__backButton,
            stage === 1 && styles.hidden,
          )}
          onClick={goBack}
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
        >
          <Image url={BackArrow} />
          <span className={cx(styles.backButton__text)}>Go back</span>
        </div>
        <Text type="h2">
          {t('Verification')}
        </Text>
      </header>
      <section className={cx(styles.verification__main)}>
        {stage === 1 && <Stage1 goNextStage={goNextStage} />}
        {stage === 2 && <Stage2 goNextStage={goNextStage} />}
        {stage === 3 && <Stage3 goNextStage={goNextStage} />}
        {stage === 4 && <Stage4 />}
      </section>
    </div>
  );
};
