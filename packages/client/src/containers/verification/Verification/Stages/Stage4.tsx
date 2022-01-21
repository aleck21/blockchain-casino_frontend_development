import React, { useState } from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Image, Button, TextInput } from '@project/libs/components';
import { ArrowBlue } from '@project/libs/assets/images';
import { croppingText } from 'utils/croppingText';
import { result, bytes, hash } from './contentDemo';
import styles from './styles.module.scss';

export const Stage4: React.FC = () => {
  const { t } = useTranslation('main');

  const [short, setShort] = useState(true);
  const [gameHash, setGameHash] = useState('');
  const [isHash, setIsHash] = useState(false);
  const [salt, setSalt] = useState('Salt');
  const [amount, setAmount] = useState('1');

  const onValidate = () => {
    setIsHash(true);
  };

  const isMobile = document.documentElement.clientWidth < 460;

  return (
    <div className={cx(styles.stageX__container)}>
      <h4>
        Input
      </h4>
      <TextInput
        name="gameHash"
        label={t('Game hash')}
        placeholder={t('Game hash')}
        classNameInput={cx(styles.h44)}
        classNameLabel={cx(styles.stageX__label)}
        value={gameHash}
        onChangeValue={setGameHash}
        isTextOnly
      />
      <div className={cx(styles.stageX__doubleInput)}>
        <TextInput
          name="salt"
          label={t('Salt')}
          placeholder={t('Salt')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={salt}
          onChangeValue={setSalt}
          isTextOnly
        />
        <TextInput
          name="amount"
          label={t('Amount of games')}
          placeholder={t('Amount of games')}
          classNameInput={cx(styles.h44)}
          classNameLabel={cx(styles.stageX__label)}
          value={amount}
          onChangeValue={setAmount}
          isTextOnly
        />
      </div>
      <footer
        className={cx(styles.verification__footer)}
        style={{ paddingTop: 30 }}
      >
        <h4
          className={cx(styles.left)}
          style={{ padding: '20px 0 20px 0' }}
        >
          Results
        </h4>
        {isHash
          ? (
            <>
              <div className={cx(styles.result__hash__container)}>
                <div className={cx(styles.result__hash__box)}>
                  <div className={cx(styles.result__title)}>
                    {t('Hash')}
                  </div>
                  <div className={cx(styles.result__text)}>
                    {isMobile
                      ? croppingText(hash.hash, 36)
                      : hash.hash}
                  </div>
                </div>
                <div className={cx(styles.result__hash__box)}>
                  <div className={cx(styles.result__title)}>
                    {t('Bust')}
                  </div>
                  <div className={cx(styles.result__text)}>
                    {hash.bust}
                  </div>
                </div>
              </div>
            </>
          )
          : (
            <>
              <div className={cx(styles.result__table__container)}>
                <table>
                  <thead>
                    <tr>
                      {result.map((th) => (
                        <th key={th.id}>
                          {th.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {result.map((td) => (
                        <td key={td.id}>
                          {td.data}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={cx(styles.bytes__box)}>
                <span
                  className={cx(styles.bytes__title)}
                  onClick={() => setShort(!short)}
                  onKeyPress={() => {}}
                  tabIndex={0}
                  role="button"
                >
                  Bytes to number
                  <Image
                    url={ArrowBlue}
                    className={cx(
                      short ? styles.arrow__toRight : styles.arrow__toDown,
                    )}
                  />
                </span>
                <span className={cx(styles.bytes__text)}>
                  {short
                    ? bytes.short
                    : (
                      <>
                        {bytes.details[0]}
                        <br />
                        {bytes.details[1]}
                      </>
                    )}
                </span>
              </div>
            </>
          )}

        <Button
          onClick={onValidate}
          className={cx(styles.validate__button)}
        >
          {t('Validate')}
        </Button>
      </footer>
    </div>
  );
};
