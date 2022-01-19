import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@project/libs/utils/i18n';
import { Text, Button, Image } from '@project/libs/components';
import { CheckIcon } from '@project/libs/assets/images';
import styles from './styles.module.scss';

export const CollectRewards: React.FC = () => {
  const { t } = useTranslation('main');

  const contentDemo = {
    reward1: {
      title: 'Gold Bunny 1 reward',
      summ: '350 000 BGT',
      buttonText: 'Collected',
      buttonIcon: CheckIcon,
    },
    reward2: {
      title: 'Gold Bunny 2 reward',
      summ: '400 000 BGT',
      buttonText: 'Collect',
      buttonIcon: '',
    },
    reward3: {
      title: 'Gold Bunny 3 reward',
      summ: '450 000 BGT',
      buttonText: 'Collect',
      buttonIcon: '',
    },
    reward4: {
      title: 'Gold Bunny 4 reward',
      summ: '500 000 BGT',
      buttonText: 'You haven\'t reached this level yet',
      buttonIcon: '',
    },
  };

  return (
    <section className={cx(styles.collectReawards__container)}>
      <div className={cx(styles.collectReawards__head)}>
        <Text
          type="h3"
          className={cx(styles.collectRewards__head__title)}
        >
          {t('Collect Rewards')}
        </Text>
      </div>
      <div className={cx(styles.collectRewards__tiles__box)}>
        <article className={cx(styles.collectRewards__tile, styles.green)}>
          <Text
            type="h6"
            className={cx(styles.small__title)}
          >
            {contentDemo.reward1.title}
          </Text>
          <Text
            type="p"
            className={cx(styles.summ__text)}
          >
            {contentDemo.reward1.summ}
          </Text>
          <Button
            disabled
            onClick={() => {}}
            className={cx(styles.button__narrow, styles.disabled)}
          >
            <Image url={contentDemo.reward1.buttonIcon} />
            &nbsp;
            {contentDemo.reward1.buttonText}
          </Button>
        </article>
        <article className={cx(styles.collectRewards__tile, styles.blue)}>
          <Text
            type="h6"
            className={cx(styles.small__title)}
          >
            {contentDemo.reward2.title}
          </Text>
          <Text
            type="p"
            className={cx(styles.summ__text)}
          >
            {contentDemo.reward2.summ}
          </Text>
          <Button
            onClick={() => {}}
            className={cx(styles.button__narrow, styles.active)}
          >
            {contentDemo.reward2.buttonText}
            {contentDemo.reward2.buttonIcon}
          </Button>
        </article>
        <article className={cx(styles.collectRewards__tile, styles.gold)}>
          <Text
            type="h6"
            className={cx(styles.small__title)}
          >
            {contentDemo.reward3.title}
          </Text>
          <Text
            type="p"
            className={cx(styles.summ__text)}
          >
            {contentDemo.reward3.summ}
          </Text>
          <Button
            onClick={() => {}}
            className={cx(styles.button__narrow, styles.active)}
          >
            {contentDemo.reward3.buttonText}
            {contentDemo.reward3.buttonIcon}
          </Button>
        </article>
        <article className={cx(styles.collectRewards__tile, styles.gray)}>
          <Text
            type="h6"
            className={cx(styles.small__title)}
          >
            {contentDemo.reward4.title}
          </Text>
          <Text
            type="p"
            className={cx(styles.summ__text)}
          >
            {contentDemo.reward4.summ}
          </Text>
          <Button
            disabled
            onClick={() => {}}
            className={cx(styles.button__wide, styles.disabled)}
          >
            {contentDemo.reward4.buttonText}
            {contentDemo.reward4.buttonIcon}
          </Button>
        </article>
      </div>
    </section>
  );
};
