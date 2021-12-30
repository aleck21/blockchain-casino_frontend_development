import { FC, useContext } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Image, Text } from '@project/libs/components';
import { ArrowWhite, IconHome, IconNotification, IconProfile, IconRoulette, IconVerification, IconWallet } from '@project/libs/assets/images';
import { useTranslation } from '@project/libs/utils/i18n';
import { NavigationContext } from 'context/navigation';
import { WidgetContext } from 'context/widget';

export const Main: FC = () => {
  const { t } = useTranslation('main');
  const isMobile = document.documentElement.clientWidth < 460;

  const {
    menuItem,
    onHome,
    onWallet,
    onProfile,
    onNotification,
    onRoulette,
    onVerification
  } = useContext(NavigationContext);

  const { setContentWidget, closeWidget } = useContext(WidgetContext);

  const onClickHome = () => {
    onHome();
    // isMobile && setContentWidget('home')
  }
  
  const onClickWallet = () => {
    onWallet();
    isMobile && setContentWidget('wallet')
  }

  const onClickProfile = () => {
    onProfile();
    isMobile && setContentWidget('profile')
  }

  const onClickNotification = () => {
    onNotification();
    // isMobile && setContentWidget('notification')
  }

  const onClickRoulette = () => {
    onRoulette();
    // isMobile && setContentWidget('roulette')
  }

  const onClickVerification = () => {
    onVerification();
    isMobile && closeWidget();
    // isMobile && setContentWidget('verification')
  }

  return (
    <div className={cx(styles.container)} >
      <nav className={cx(styles.nav_top__container)}>
        <section
          className={cx(styles.nav__item,
            menuItem.home ? styles.active : styles.inactive
          )}
          onClick={onClickHome}
        >
          <Image url={IconHome} />
          <Text type='p'>{t('Home')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.wallet ? styles.active : styles.inactive
          )}
          onClick={onClickWallet}
        >
          <Image url={IconWallet} />
          <Text type='p'>{t('Wallet')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.profile ? styles.active : styles.inactive
          )}
          onClick={onClickProfile}
        >
          <Image url={IconProfile} />
          <Text type='p'>{t('Profile')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.notification ? styles.active : styles.inactive
          )}
          onClick={onClickNotification}
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
          onClick={onClickRoulette}
        >
          <Image url={IconRoulette} />
          <Text type='p'>{t('Roulette')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
        <section
          className={cx(styles.nav__item,
            menuItem.verification ? styles.active : styles.inactive
          )}
          onClick={onClickVerification}
        >
          <Image url={IconVerification} />
          <Text type='p'>{t('Verification')}</Text>
          <Image url={ArrowWhite} className={cx(styles.arrow)} />
        </section>
      </nav>
    </div>
  );
}