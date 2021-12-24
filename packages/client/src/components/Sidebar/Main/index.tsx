import { FC, useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';
import { ArrowWhite, IconHome, IconNotification, IconProfile, IconRoulette, IconVerification, IconWallet } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { NavigationContext } from 'context/navigation';

export const Main: FC = () => {
  const { t } = useTranslation('main');

  const {
    menuItem,
    onHome,
    onWallet,
    onProfile,
    onNotification,
    onRoulette,
    onVerification
  } = useContext(NavigationContext);
  
  return (
    <div className={cx(styles.container)} >
      <nav className={cx(styles.nav_top__container)}>
        <section
          className={cx(styles.nav__item,
            menuItem.home ? styles.active : styles.inactive
          )}
          onClick={onHome}
        >
          <Image url={IconHome} />
          <Text type='p'>{t('Home')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.wallet ? styles.active : styles.inactive
          )}
          onClick={onWallet}
        >
          <Image url={IconWallet} />
          <Text type='p'>{t('Wallet')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.profile ? styles.active : styles.inactive
          )}
          onClick={onProfile}
        >
          <Image url={IconProfile} />
          <Text type='p'>{t('Profile')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.notification ? styles.active : styles.inactive
          )}
          onClick={onNotification}
        >
          <Image url={IconNotification} />
          <Text type='p'>{t('Notification')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
      </nav>
      <div className={cx(styles.separator)} />
      <nav className={cx(styles.nav_bottom__container)}>
        <section
          className={cx(styles.nav__item,
            menuItem.roulette ? styles.active : styles.inactive
          )}
          onClick={onRoulette}
        >
          <Image url={IconRoulette} />
          <Text type='p'>{t('Roulette')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.verification ? styles.active : styles.inactive
          )}
          onClick={onVerification}
        >
          <Image url={IconVerification} />
          <Text type='p'>{t('Verification')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
      </nav>
    </div>
  );
}