import React, { useState } from 'react';
import { WrapSelect, WrapDatePicker } from '@project/libs/components';
import './styles.scss';
import { list, table } from './contentDemo';
import { Table } from './Table';

export const Bill: React.FC = () => {
  const [button, setButton] = useState({
    all: true,
    game: false,
    bonus: false,
    affilate: false,
    swap: false,
  });

  const onAll = () => {
    setButton({
      all: true,
      game: false,
      bonus: false,
      affilate: false,
      swap: false,
    });
  };

  const onGame = () => {
    setButton({
      all: false,
      game: true,
      bonus: false,
      affilate: false,
      swap: false,
    });
  };

  const onBonus = () => {
    setButton({
      all: false,
      game: false,
      bonus: true,
      affilate: false,
      swap: false,
    });
  };

  const onAffilate = () => {
    setButton({
      all: false,
      game: false,
      bonus: false,
      affilate: true,
      swap: false,
    });
  };

  const onSwap = () => {
    setButton({
      all: false,
      game: false,
      bonus: false,
      affilate: false,
      swap: true,
    });
  };

  return (
    <section className="bill__container">
      <div className="left__column">
        <WrapDatePicker
          placeholder={['Start', 'End']}
          classNameButton="date__button"
        />
        <div
          className={button.all ? 'box black__box' : 'box'}
          onClick={onAll}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          All
        </div>
        <div
          className={button.game ? 'box black__box' : 'box'}
          onClick={onGame}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          Game
        </div>
        <div
          className={button.bonus ? 'box black__box' : 'box'}
          onClick={onBonus}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          Bonus
        </div>
        <div
          className={button.affilate ? 'box black__box' : 'box'}
          onClick={onAffilate}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          Affilate
        </div>
        <div
          className={button.swap ? 'box black__box' : 'box'}
          onClick={onSwap}
          onKeyPress={() => {}}
          tabIndex={0}
          role="button"
        >
          Swap
        </div>
      </div>
      <div className="right__column">
        <WrapSelect list={list} />
        <Table datas={table} />
      </div>
    </section>
  );
};
