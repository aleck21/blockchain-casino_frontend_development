import React, { useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Select } from 'components/Select';
import { list, table, tableCrash } from './contentDemo';
import { Image } from '@project/libs/components';
import { useTranslation } from '@project/libs/utils/i18n';
import { Table } from './Table';
import { WrapDatePicker } from 'components/DatePicker';

export const listForSelect = (
  list: {id: string | number, data: string | any, icon: string}[]
) => {
  return list.map((item, i) => {
    return {
      id: item.id,
      data: <>
        <Image url={item.icon} />
        <p className={cx(styles.select__item__text)}>
          {item.data}
        </p>
      </>
    }
  });
}

export const BetsTab: React.FC = () => {
  const { t } = useTranslation('main');

  const [ tabs, setTabs ] = useState({
    all: true,
    crash: false,
    dice: false
  })

  const onAll = () => {
    setTabs({
      all: true,
      crash: false,
      dice: false
    })
  }
  
  const onCrash = () => {
    setTabs({
      all: false,
      crash: true,
      dice: false
    })
  }

  const onDice = () => {
    setTabs({
      all: false,
      crash: false,
      dice: true
    })
  }

  return(
    <section className={cx(styles.bets__container)}>
      <header className={cx(styles.bets__header__container)}>
        <section className={cx(styles.header__calendar__button)}>
          <WrapDatePicker />
        </section>
        <section className={cx(styles.header__tabs)}>
          <nav className={cx(styles.header__tabs__box)}>
            <div
              className={cx(styles.tabs__item, styles.tab__left,
                tabs.all ? styles.active : styles.enactive
              )}
              onClick={onAll}
            >
              All
            </div>
            <div
              className={cx(styles.tabs__item, styles.tab__middle,
                tabs.crash ? styles.active : styles.enactive
              )}
              onClick={onCrash}
            >
              Crash
            </div>
            <div
              className={cx(styles.tabs__item, styles.tab__right,
                tabs.dice ? styles.active : styles.enactive
              )}
              onClick={onDice}
            >
              Dice
            </div>
          </nav>
        </section>
        <section className={cx(styles.header__selectCurrency)}>
          <Select
            list={listForSelect(list)}
            classItems={cx(styles.select__items)}
            classItem={cx(styles.select__item__box)}
            classContainer={cx(styles.select__container)}
            classArrow={cx(styles.select__arrow)}
            classHidden={cx(styles.items__hidden)}
          />
        </section>
      </header>
      <main className={cx(styles.bets__main__container)}>
        {tabs.all && <Table data={table} />}
        {tabs.crash && <Table data={tableCrash} />}
        {tabs.dice && <Table data={table} />}
      </main>
    </section>
  );
}