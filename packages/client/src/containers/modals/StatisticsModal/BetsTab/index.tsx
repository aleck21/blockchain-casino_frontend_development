import React, { useState } from 'react';
import cx from 'classnames';
import { Image, WrapDatePicker, SelectWithContent } from '@project/libs/components';
import { CurrencyColorIcons } from 'constants/currencies';
import { Table } from './Table';
import { table, tableCrash, list } from './contentDemo';
import styles from './styles.module.scss';

export const listForSelect = (
  // eslint-disable-next-line @typescript-eslint/no-shadow
  list: { id: string | number, data: string }[],
) => list.map((item) => ({
  id: item.id,
  data: (
    <>
      <Image url={CurrencyColorIcons[item.data]} />
      <p className={cx(styles.select__item__text)}>
        {item.data}
      </p>
    </>
  ),
}));

export const BetsTab: React.FC = () => {
  const [tabs, setTabs] = useState({
    all: true,
    crash: false,
    dice: false,
  });

  const onAll = () => {
    setTabs({
      all: true,
      crash: false,
      dice: false,
    });
  };

  const onCrash = () => {
    setTabs({
      all: false,
      crash: true,
      dice: false,
    });
  };

  const onDice = () => {
    setTabs({
      all: false,
      crash: false,
      dice: true,
    });
  };

  return (
    <section className={cx(styles.bets__container)}>
      <header className={cx(styles.bets__header__container)}>
        <section className={cx(styles.header__calendar__button)}>
          <WrapDatePicker
            classNameButton={cx(styles.calendar__button)}
          />
        </section>
        <section className={cx(styles.header__tabs)}>
          <div className={cx(styles.header__tabs__box)}>
            <div
              className={cx(styles.tabs__item, styles.tab__left,
                tabs.all ? styles.active : styles.enactive)}
              onClick={onAll}
              onKeyPress={() => {}}
              tabIndex={0}
              role="button"
            >
              All
            </div>
            <div
              className={cx(styles.tabs__item, styles.tab__middle,
                tabs.crash ? styles.active : styles.enactive)}
              onClick={onCrash}
              onKeyPress={() => {}}
              tabIndex={0}
              role="button"
            >
              Crash
            </div>
            <div
              className={cx(styles.tabs__item, styles.tab__right,
                tabs.dice ? styles.active : styles.enactive)}
              onClick={onDice}
              onKeyPress={() => {}}
              tabIndex={0}
              role="button"
            >
              Dice
            </div>
          </div>
        </section>
        <section className={cx(styles.header__selectCurrency)}>
          <SelectWithContent
            list={listForSelect(list)}
            // classItems={cx(styles.select__item__box)}
            classItem={cx(styles.select__item__box)}
            classContainer={cx(styles.select__container)}
            classWrapContainer={cx(styles.select__wrap__container)}
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
};
