import React, { memo, useCallback, useState } from 'react';
import { Text } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import styles from './styles.module.scss';

const HotKeys = memo(() => {
  const { t } = useTranslation('main');
  // const [keyCode, setKeyCode] = useState('');
  const [hotkeysEnabled, setHotkeysEnabled] = useState(false);

  // const showKeyCode = (event: any) => {
  //  setKeyCode(event.code);
  // };

  const checkboxToggle = useCallback(() => {
    setHotkeysEnabled(!hotkeysEnabled);
  }, [hotkeysEnabled]);

  return (
    <section className={styles.hotkeys__container}>
      <Text type="h2">
        {t('Hot Keys')}
      </Text>
      <div className={styles.choise__container}>
        <Text type="p">
          {t('Make a bet')}
        </Text>
        <div
          className={styles.choise__keycode}
        >
          Space
        </div>
      </div>
      <section
        className={styles.checkbox__container}
        onClick={checkboxToggle}
        role="none"
      >
        <div
          className={styles.choise__checkbox}
        >
          {hotkeysEnabled && (
            <div className={styles.checkbox__marker} />
          )}
        </div>
        <p>
          {t('Hotkeys Enabled')}
        </p>
      </section>
    </section>
  );
});

export { HotKeys };
